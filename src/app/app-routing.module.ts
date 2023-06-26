import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'experience', component: ExperiencePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
