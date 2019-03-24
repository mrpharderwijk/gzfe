import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonReply } from '../models/common-reply.model';
import { Observable } from 'rxjs';
import { FeedItem } from '../models/feed/feed-item.model';

@Injectable({
  providedIn: 'root',
})
export class TechFeedService {
  constructor(private http: HttpClient) {}

  /**
   * Get all news sources
   * @param feedType
   */
  getAllTechSources() {
    const url = `${environment.domain.gzbe.BASE}` + `${environment.serviceUrls.tech.sources}`;
    return this.http.get<CommonReply<any>>(url);
  }

  getAllTechArticles(sourceId: string = 'all'): Observable<CommonReply<FeedItem[]>> {
    const url =
      `${environment.domain.gzbe.BASE}${environment.serviceUrls.tech.url}` +
      `${sourceId === 'all' ? '' : `/sources/${sourceId}`}`;

    return this.http.get<CommonReply<FeedItem[]>>(url);
  }
}
