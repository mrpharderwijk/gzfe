import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CommonReply } from '../models/common-reply.model';
import { FeedItem } from '../models/feed/feed-item.model';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedService {
  constructor(private http: HttpClient) {}

  /**
   * Get all news sources
   * @param feedType
   */
  getAllNewsSources(feedType: string) {
    const url = `${environment.domain.gzbe.BASE}` + `${environment.serviceUrls.news.sources}`;
    return this.http.get<CommonReply<any>>(url);
  }

  getAllNewsArticles(feedType: string, sourceId: string = 'all'): Observable<CommonReply<FeedItem[]>> {
    const url =
      `${environment.domain.gzbe.BASE}${environment.serviceUrls.news.url}` +
      `${sourceId === 'all' ? '' : `/sources/${sourceId}`}`;

    return this.http.get<CommonReply<FeedItem[]>>(url);
  }
}
