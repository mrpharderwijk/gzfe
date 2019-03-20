import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './shared/services/news-api.service';
import { Article } from './shared/models/article.model';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles: Article[] = [];
  articlesCache: Article[];
  sources: any[] = [];
  currentSource = 'all';
  currentCategory = 'algemeen';

  constructor(private newsApiService: NewsApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    /**
     * Get all news headlines
     */
    this.newsApiService
      .getAllHeadlines()
      .pipe(
        catchError(error => {
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => {
        this.currentSource = 'all';
        this.articles = response.data.sort(function(a, b) {
          return a.isoDate > b.isoDate ? -1 : a.isoDate < b.isoDate ? 1 : 0;
        });
        this.articlesCache = this.articles;
      });

    /**
     * Get all news sources
     */
    this.newsApiService
      .getAllSources()
      .pipe(
        catchError(error => {
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => {
        this.sources = response.data;
      });
  }

  /**
   * Search news articles of a certain source
   * @param sourceName
   */
  searchArticles(sourceName) {
    if (sourceName === 'all') {
      this.currentSource = 'all';
      this.articles = this.articlesCache;
      return;
    }

    this.currentSource = sourceName;
    this.articles = this.articlesCache.filter(article => article.source.name === sourceName);
  }

  /**
   * Search news articles of a certain category
   * @param categoryName
   */
  searchCategory(categoryName: string) {
    this.currentCategory = categoryName;

    this.newsApiService
      .getAllHeadlinesByCategory(categoryName)
      .pipe(
        catchError(error => {
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => {
        this.articles = response.data.sort(function(a, b) {
          return a.isoDate > b.isoDate ? -1 : a.isoDate < b.isoDate ? 1 : 0;
        });
        this.articlesCache = this.articles;
      });
  }

  /**
   * Get the source logo by author
   * @param author
   */
  getSourceLogo(author: string) {
    author = author.toLowerCase();

    if (author === 'all') {
      return 'assets/images/all.png';
    }

    /**
     * Nu.nl also publishes anp
     */
    const logo = author.includes('anp') ? 'anp' : this.sources.find(source => author.includes(source.name)).logo;

    return logo ? `assets/images/${logo}.png` : null;
  }
}
