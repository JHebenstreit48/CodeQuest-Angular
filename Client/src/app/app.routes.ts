import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@/components/home/home.component').then(m => m.HomeComponent),
  },
  // Angular Basics Start

  // GettingStarted Start
  {
    path: 'angular/basics/gettingstarted/intro',
    loadComponent: () =>
      import('@/components/Frontend/AngularPages/Basics/GettingStarted/introduction/introduction.component')
        .then(m => m.IntroductionComponent),
  },
  {
    path: 'angular/basics/gettingstarted/creatingrunning',
    loadComponent: () =>
      import('@/components/Frontend/AngularPages/Basics/GettingStarted/running/running.component')
        .then(m => m.RunningComponent)
  },
  {
    path: 'angular/basics/gettingstarted/angularcli',
    loadComponent: () =>
      import('@/components/Frontend/AngularPages/Basics/GettingStarted/cli-pages/cli-pages.component')
        .then(m => m.CliPagesComponent)
  },
  // GettingStarted End

  // Angular Basics End
];
