import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { CommonReply } from '../models/common-reply.model';
import { Observable } from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  getAllSources() {
    return this.http.get<CommonReply<any>>(`${environment.domain.gzbe.BASE}${environment.serviceUrls.news.sources}`);
  }

  getAllHeadlines(): Observable<CommonReply<Article[]>> {
    return this.http.get<CommonReply<Article[]>>(
      `${environment.domain.gzbe.BASE}${environment.serviceUrls.news.headlines}`,
    );
  }

  getAllHeadlinesByCategory(categoryName: string): Observable<CommonReply<Article[]>> {
    return this.http.get<CommonReply<Article[]>>(
      `${environment.domain.gzbe.BASE}${environment.serviceUrls.news.headlines}/${categoryName}`,
    );
  }
}
