import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { CommonReply } from '../shared/models/common-reply.model';
import { EmergencyFeedService } from '../shared/services/emergency-feed.service';
import { FeedItem } from '../shared/models/feed/feed-item.model';
import { NewsSource } from '../shared/models/news-source.model';

@Component({
  selector: 'gz-emergencies',
  templateUrl: './emergencies.component.html',
  styleUrls: ['./emergencies.component.scss'],
})
export class EmergenciesComponent implements OnInit {
  feedItems: FeedItem[] = [];
  itemsLoading = false;
  currentRegion: { id: string; name: string };
  defaultRegion: { id: string; name: string } = {
    id: 'gooi-en-vechtstreek',
    name: 'Gooi en Vechtstreek',
  };
  regions: { id: string; name: string }[] = [];

  constructor(private emergencyFeedService: EmergencyFeedService) {}

  ngOnInit() {
    window.scrollTo(0, 0);
    this.currentRegion = this.defaultRegion;

    /**
     * Get all news
     */
    this.getItemsByRegion(this.currentRegion);

    /**
     * Get all news sources for use in the menu
     */
    this.emergencyFeedService
      .getAllRegions()
      .pipe(
        // TODO: catch error
        catchError(error => {
          console.error(error);
          return EMPTY;
        }),
      )
      .subscribe(response => {
        this.regions = response.data;
      });
  }

  /**
   * Search emergency articles of a certain region
   * @param sourceName
   */
  getItemsByRegion(region: { id: string; name: string }) {
    window.scrollTo(0, 0);
    this.itemsLoading = true;
    this.currentRegion = region;

    // only send source id when a source is set (all = null)
    // const requestSource = region.id === 'all' ? null : source.id;

    this.emergencyFeedService
      .getAllEmergenciesByRegion(region.id)
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
   * Processes the response by sorting the feediTems and disabling the loader
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
