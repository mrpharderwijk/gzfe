import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private _sidenav = new BehaviorSubject<MatSidenav>(null);

  sidenav: Observable<MatSidenav> = this._sidenav.asObservable();

  constructor() {}

  setSidenav(sidenav: MatSidenav) {
    this._sidenav.next(sidenav);
  }
}
