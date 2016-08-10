import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './slide/slide.component';

const appRoutes: Routes = [
  {
    path: 'slide/:id',
    component: SlideComponent
  }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);