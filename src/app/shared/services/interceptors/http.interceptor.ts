import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptor implements HttpInterceptor {
  constructor(private _router: Router) {}

  // TODO: return object
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    const additionalInfo: { setHeaders: { [key: string]: string } } = { setHeaders: {} };
    const pdbeService = this.isGzbeCall(environment.domain.gzbe.BASE, request.url);

    // add the (new) headers to the request
    request = request.clone(additionalInfo);

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          // check to see if there's internet
          if (!window.navigator.onLine) {
            // if there is no internet, throw a HttpErrorResponse error
            // since an error is thrown, the function will terminate here
            console.warn('Internet connection required');
            throw new Error('Internet connection required.');
          }

          // if (error.status === 401) {
          //   this._router.navigate(['/']);
          // }
        }

        // Other case throw an error
        throw new Error(error);
      }),
      map(response => {
        if (response instanceof HttpResponse) {
          console.log(response);
        }

        return response;
      }),
    );
  }

  /**
   * Checks if this is a BE call
   * @param gzbeUrl
   * @param requestUrl
   */
  private isGzbeCall(gzbeUrl: string, requestUrl: string): boolean {
    return requestUrl.startsWith(gzbeUrl);
  }
}
