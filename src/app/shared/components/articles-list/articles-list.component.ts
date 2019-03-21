import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article/article.model';

@Component({
  selector: 'gz-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss'],
})
export class ArticlesListComponent implements OnInit {
  @Input() articles: Article[];
  @Input() loading: boolean;

  constructor() {}

  ngOnInit() {}
}
