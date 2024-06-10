import { Routes } from '@angular/router';
import { ContainerComponent } from './component/container/container.component';

export const routes: Routes = [
  {
    path: "Container",
    component: ContainerComponent
  },
  {
    path: '',
    redirectTo: '/Container',
    pathMatch: 'full'

  }
];
