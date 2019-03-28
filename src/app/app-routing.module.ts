import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { TechComponent } from './tech/tech.component';
import { TrafficComponent } from './traffic/traffic.component';

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
  {
    path: 'verkeer',
    pathMatch: 'full',
    component: TrafficComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
