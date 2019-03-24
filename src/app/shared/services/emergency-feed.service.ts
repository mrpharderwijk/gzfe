import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CommonReply } from '../models/common-reply.model';
import { FeedItem } from '../models/feed/feed-item.model';

@Injectable({
  providedIn: 'root',
})
export class EmergencyFeedService {
  constructor(private http: HttpClient) {}

  /**
   * Get all news sources
   * @param feedType
   */
  getAllRegions() {
    const url = `${environment.domain.gzbe.BASE}${environment.serviceUrls.emergencies.regions}`;
    return this.http.get<CommonReply<any>>(url);
  }

  getAllEmergenciesByRegion(regionId: string = 'gooi-en-vechtstreek'): Observable<CommonReply<FeedItem[]>> {
    const url = `${environment.domain.gzbe.BASE}${environment.serviceUrls.emergencies.url}/regions/${regionId}`;

    return this.http.get<CommonReply<FeedItem[]>>(url);
  }
}
