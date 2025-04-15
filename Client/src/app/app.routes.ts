import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'angular/basics/gettingstarted/intro',
    loadComponent: () =>
      import('@/components/Frontend/AngularPages/Basics/GettingStarted/introduction/introduction.component')
        .then(m => m.IntroductionComponent),
  },
];
