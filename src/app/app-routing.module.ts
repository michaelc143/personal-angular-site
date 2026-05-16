import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./home-page/home-page.component').then(m => m.HomePageComponent) 
  },
  { 
    path: 'experience', 
    loadComponent: () => import('./experience-page/experience-page.component').then(m => m.ExperiencePageComponent) 
  },
  { 
    path: 'projects', 
    loadComponent: () => import('./projects-page/projects-page.component').then(m => m.ProjectsPageComponent) 
  },
  { 
    path: '**', 
    loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
