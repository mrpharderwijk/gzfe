import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { CommonReply } from '../models/common-reply.model';
import { Article } from '../models/article/article.model';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  getAllSources() {
    return this.http.get<CommonReply<any>>(`${environment.domain.gzbe.BASE}${environment.serviceUrls.news.sources}`);
  }

  getAllHeadlines(sourceId: string = null): Observable<CommonReply<Article[]>> {
    const url =
      `${environment.domain.gzbe.BASE}` +
      `${environment.serviceUrls.news.sources}` +
      `${sourceId ? `/${sourceId}` : ''}/headlines`;

    return this.http.get<CommonReply<Article[]>>(url);
  }
}
