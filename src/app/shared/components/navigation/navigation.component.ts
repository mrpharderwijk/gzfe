import { Component, OnInit, Input } from '@angular/core';
import { NewsSource } from '../../models/news-source.model';

@Component({
  selector: 'gz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentCategory: string;
  @Input() currentSource: NewsSource;
  @Input() sidenav: any;

  constructor() {}

  ngOnInit() {}
}
