import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './shared/services/news-api.service';
import { Article } from './shared/models/article/article.model';
import { NewsSource } from './shared/models/news-source.model';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonReply } from './shared/models/common-reply.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  articles: Article[] = [];
  articlesCache: Article[];
  sources: NewsSource[] = [];
  defaultSource: NewsSource = {
    id: 'all',
    link: 'all',
    logo: 'all',
    name: 'Alles',
  };
  currentSource: NewsSource = this.defaultSource;
  currentCategory = 'algemeen';
  articlesLoading = false;

  constructor(private newsApiService: NewsApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    /**
     * Get all news headlines
     */
    this.getArticlesBySource(this.defaultSource);

    /**
     * Get all news sources
     */
    this.newsApiService
      .getAllSources()
      .pipe(
        // TODO: catch error
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
  getArticlesBySource(source: NewsSource) {
    window.scrollTo(0, 0);
    this.articlesLoading = true;
    this.currentSource = source;
    const category = this.currentCategory !== 'algemeen' ? this.currentCategory : null;

    this.newsApiService
      .getAllHeadlines(category)
      .pipe(
        // TODO: catch error
        catchError(error => {
          this.articlesLoading = false;
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => this.processArticles(response));
  }

  /**
   * Search news articles of a certain category
   * @param categoryName
   */
  getArticlesByCategory(categoryName: string) {
    window.scrollTo(0, 0);
    this.articlesLoading = true;
    this.currentCategory = categoryName;

    this.newsApiService
      .getAllHeadlines(this.currentCategory)
      .pipe(
        catchError(error => {
          this.articlesLoading = false;
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => this.processArticles(response));
  }

  processArticles(response: CommonReply<Article[]>) {
    // Sort articles, newest first
    const articles = response.data.sort(function(a, b) {
      return a.isoDate > b.isoDate ? -1 : a.isoDate < b.isoDate ? 1 : 0;
    });

    // Depending on the current selected source filter the articles
    this.articles =
      this.currentSource.id === 'all'
        ? articles
        : articles.filter(article => article.source.id === this.currentSource.id);

    // Remove loading state
    this.articlesLoading = false;
  }
}
