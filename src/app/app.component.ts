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
  currentSource: NewsSource;
  currentCategory = 'algemeen';
  articlesLoading = false;

  constructor(private newsApiService: NewsApiService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.currentSource = this.defaultSource;

    /**
     * Get all news headlines
     */
    this.getArticlesBySource(this.currentSource);

    /**
     * Get all news sources for use in the menu
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

    // only send source id when a source is set (all = null)
    const requestSource = source.id === 'all' ? null : source.id;

    this.newsApiService
      .getAllHeadlines(requestSource)
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

  /**
   * Processes the response by sorting the articles and disabling the loader
   * @param response
   */
  processArticles(response: CommonReply<Article[]>) {
    // Sort articles, newest first
    this.articles = response.data.sort(function(a, b) {
      return a.isoDate > b.isoDate ? -1 : a.isoDate < b.isoDate ? 1 : 0;
    });

    // Remove loading state
    this.articlesLoading = false;
  }
}
