import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'experience', component: ExperiencePageComponent },
  { path: 'projects', component: ProjectsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
