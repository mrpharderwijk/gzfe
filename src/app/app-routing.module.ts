import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { TechComponent } from './tech/tech.component';

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
  {
    path: 'tech',
    pathMatch: 'full',
    component: TechComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
