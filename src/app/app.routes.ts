import { Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { NoContentComponent } from './no-content/no-content.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: PublicComponent },
  { path: 'home',  component: PublicComponent },
  { path: '**',    component: NoContentComponent },
];
