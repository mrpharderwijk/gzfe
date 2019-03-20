import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsApiService } from './services/news-api.service';

@NgModule({
  imports: [BrowserAnimationsModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  exports: [],
  providers: [NewsApiService],
})
export class SharedModule {}
