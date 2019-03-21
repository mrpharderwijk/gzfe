import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NewsApiService } from './services/news-api.service';
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
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticleLoaderComponent } from './components/articles-list/article-loader/article-loader.component';
import { ArticleComponent } from './components/articles-list/article/article.component';
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
  declarations: [ArticleComponent, ArticleLoaderComponent, ArticlesListComponent, NavigationComponent, DateAgoPipe],
  exports: [
    ArticleComponent,
    ArticleLoaderComponent,
    ArticlesListComponent,
    NavigationComponent,
    DateAgoPipe,
    ...materialModules,
  ],
  providers: [NewsApiService],
})
export class SharedModule {}
