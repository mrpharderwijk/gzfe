import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonReply } from '../models/common-reply.model';

@Injectable({
  providedIn: 'root',
})
export class TrafficFeedService {
  constructor(private http: HttpClient) {}

  /**
   * Get all traffic
   * @param feedType
   */
  getTraffic() {
    const url = `${environment.domain.gzbe.BASE}${environment.serviceUrls.traffic.url}`;
    return this.http.get<CommonReply<any>>(url);
  }
}
