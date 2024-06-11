import { Routes } from '@angular/router';
import { ContainerComponent } from './component/container/container.component';
import { PerfilComponent } from './component/perfil/perfil.component';

export const routes: Routes = [
  {
    path: "Container",
    component: ContainerComponent
  },
  {
    path: 'Perfil:id',
    component: PerfilComponent
  },
  {
    path: '',
    redirectTo: '/Container',
    pathMatch: 'full'

  },
];
