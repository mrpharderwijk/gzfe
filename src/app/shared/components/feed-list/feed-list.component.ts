import { Component, OnInit, Input } from '@angular/core';
import { FeedItem } from '../../models/feed/feed-item.model';

@Component({
  selector: 'gz-feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss'],
})
export class FeedListComponent implements OnInit {
  @Input() items: FeedItem[];
  @Input() loading: boolean;
  @Input() type: string;

  constructor() {}

  ngOnInit() {}
}
