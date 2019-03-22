import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsSource } from '../../models/news-source.model';

@Component({
  selector: 'gz-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() currentCategory: string;
  @Input() sources: NewsSource[];
  @Input() sidenav: any;

  @Output() sourceUpdated: EventEmitter<NewsSource> = new EventEmitter();

  defaultSource: NewsSource = {
    id: 'all',
    link: 'all',
    logo: 'all',
    name: 'Alles',
  };
  currentSource: NewsSource;

  constructor() {}

  ngOnInit() {
    this.currentSource = this.defaultSource;
  }

  setCurrentSource(source: NewsSource) {
    this.currentSource = source;
    this.sourceUpdated.emit(source);
  }
}
