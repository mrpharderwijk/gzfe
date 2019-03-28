import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsFeedService } from './services/news-feed.service';
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
  MatTabsModule,
  MatBadgeModule,
  MatExpansionModule,
} from '@angular/material';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FeedListComponent } from './components/feed-list/feed-list.component';
import { FeedListItemComponent } from './components/feed-list/feed-list-item/feed-list-item.component';
import { ListLoaderComponent } from './components/list-loader/list-loader.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { TechFeedService } from './services/tech-feed.service';
import { EmergencyFeedService } from './services/emergency-feed.service';
import { TrafficListComponent } from './components/traffic-list/traffic-list.component';
import { SecondsToMinutesPipe } from './pipes/seconds-to-minutes.pipe';
import { MetresToKmPipe } from './pipes/metres-to-km.pipe';
import { SpaceAfterCharPipe } from './pipes/space-after-char.pipe';
import { TrafficJamItemComponent } from './components/traffic-list/traffic-jam-item/traffic-jam-item.component';
import { RadarItemComponent } from './components/traffic-list/radar-item/radar-item.component';
import { RoadWorkItemComponent } from './components/traffic-list/road-work-item/road-work-item.component';

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
  MatTabsModule,
  MatBadgeModule,
  MatExpansionModule,
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
  declarations: [
    FeedListComponent,
    FeedListItemComponent,
    ListLoaderComponent,
    NavigationComponent,
    DateAgoPipe,
    TrafficListComponent,
    SecondsToMinutesPipe,
    MetresToKmPipe,
    SpaceAfterCharPipe,
    TrafficJamItemComponent,
    RadarItemComponent,
    RoadWorkItemComponent,
  ],
  exports: [
    FeedListComponent,
    FeedListItemComponent,
    ListLoaderComponent,
    NavigationComponent,
    TrafficListComponent,
    DateAgoPipe,
    ...materialModules,
  ],
  providers: [NewsFeedService, TechFeedService, EmergencyFeedService],
})
export class SharedModule {}
