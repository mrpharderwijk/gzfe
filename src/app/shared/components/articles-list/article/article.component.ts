import { Component, Input } from '@angular/core';
import { Article } from '../../../models/article/article.model';

@Component({
  selector: 'gz-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article;
  @Input() logoImage: string;

  constructor() {}
}
