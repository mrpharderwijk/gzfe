import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: NewsComponent,
  },
  {
    path: 'alarmeringen',
    pathMatch: 'full',
    component: EmergenciesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
