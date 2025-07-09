import { Routes } from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {TaskComponent} from './pages/task/task.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'task/:id',
    component: TaskComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
