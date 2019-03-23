import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CommonReply } from '../models/common-reply.model';
import { FeedItem } from '../models/feed/feed-item.model';

@Injectable({
  providedIn: 'root',
})
export class FeedsService {
  constructor(private http: HttpClient) {}

  getAllSources(feedType: string) {
    const url = `${environment.domain.gzbe.BASE}` + `${environment.serviceUrls.sources.url}/${feedType}`;
    return this.http.get<CommonReply<any>>(url);
  }

  getFeedContent(feedType: string, sourceId: string = 'all'): Observable<CommonReply<FeedItem[]>> {
    const url =
      `${environment.domain.gzbe.BASE}${environment.serviceUrls.feeds.url}` +
      `${feedType ? `/${feedType}` : ''}` +
      `${sourceId === 'all' ? '' : `/sources/${sourceId}`}`;

    return this.http.get<CommonReply<FeedItem[]>>(url);
  }
}
