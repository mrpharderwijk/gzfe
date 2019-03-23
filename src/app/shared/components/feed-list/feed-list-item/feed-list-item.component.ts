import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../../../models/feed/feed-item.model';

@Component({
  selector: 'gz-feed-list-item',
  templateUrl: './feed-list-item.component.html',
  styleUrls: ['./feed-list-item.component.scss'],
})
export class FeedListItemComponent implements OnInit {
  @Input() item: FeedItem;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
}
