import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {

  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }
    projectsHeader: String = "Here's some of my open source projects with the source code linked in the titles!";
    appTemplateTitle: string = "WebApp Template";
    bballTitle: String = "BasketballReference Python Package";
    reactTitle: String = "Personal Resume Site in React";
    watchTitle: String = "Watch Animation using OpenGl";
    shipTitle: String = "Space Ship Animation using OpenGl";
    triangleTitle: String = "Moveable Triangle Animation using Opengl";
    employeeTitle: String = "Employee Payroll App"
    sourceCodeMsg: String = "Source Code Here!";
    panelOpenStateApi = false;
    panelOpenStateAi = false;
    openMeMsg: String = "Open here for more information!"
    closeMeMsg: String = "Close the expansion panel here!"
    machineLearningTitle: String = "Clean/Dirty Roads Machine Learning Model"
}
