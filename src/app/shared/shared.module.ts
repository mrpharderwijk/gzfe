import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeedsService } from './services/feeds.service';
import { FlexLayoutModule } from '@angular/flex-layout';

/**
 * ANGULAR MATERIAL MODULES
 */
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedListItemComponent } from './components/feed-list/feed-list-item/feed-list-item.component';
import { FeedLoaderComponent } from './components/feed-list/feed-loader/feed-loader.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ...materialModules,
  ],
  declarations: [FeedListComponent, FeedListItemComponent, FeedLoaderComponent, NavigationComponent, DateAgoPipe],
  exports: [
    FeedListComponent,
    FeedListItemComponent,
    FeedLoaderComponent,
    NavigationComponent,
    DateAgoPipe,
    ...materialModules,
  ],
  providers: [FeedsService],
})
export class SharedModule {}
