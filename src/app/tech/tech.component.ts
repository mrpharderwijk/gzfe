import { Component, OnInit } from '@angular/core';
import { FeedItem } from '../shared/models/feed/feed-item.model';
import { NewsSource } from '../shared/models/news-source.model';
import { TechFeedService } from '../shared/services/tech-feed.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CommonReply } from '../shared/models/common-reply.model';

@Component({
  selector: 'gz-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements OnInit {
  feedItems: FeedItem[];
  itemsLoading = false;
  currentSource: NewsSource;
  defaultSource: NewsSource = {
    id: 'all',
    link: 'all',
    logo: 'all',
    name: 'Alles',
  };
  sources: NewsSource[] = [];

  constructor(private techFeedService: TechFeedService) {}

  ngOnInit() {
    this.currentSource = this.defaultSource;

    /**
     * Get all news
     */
    this.getItemsBySource(this.currentSource);

    /**
     * Get all news sources for use in the menu
     */
    this.techFeedService
      .getAllTechSources()
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
  getItemsBySource(source: NewsSource) {
    window.scrollTo(0, 0);
    this.itemsLoading = true;
    this.currentSource = source;

    // only send source id when a source is set (all = null)
    const requestSource = source.id === 'all' ? 'all' : source.id;

    this.techFeedService
      .getAllTechArticles(requestSource)
      .pipe(
        // TODO: catch error
        catchError(error => {
          this.itemsLoading = false;
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => this.processItems(response));
  }

  /**
   * Processes the response by sorting the articles and disabling the loader
   * @param response
   */
  processItems(response: CommonReply<FeedItem[]>) {
    // Sort articles, newest first
    this.feedItems = response.data.sort(function(a, b) {
      return a.isoDate > b.isoDate ? -1 : a.isoDate < b.isoDate ? 1 : 0;
    });

    // Remove loading state
    this.itemsLoading = false;
  }
}
