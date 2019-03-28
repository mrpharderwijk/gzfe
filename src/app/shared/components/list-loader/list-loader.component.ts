import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gz-list-loader',
  templateUrl: './list-loader.component.html',
  styleUrls: ['./list-loader.component.scss'],
})
export class ListLoaderComponent implements OnInit {
  items = [0, 1, 2];

  constructor() {}

  ngOnInit() {}
}
