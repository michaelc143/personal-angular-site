import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent {
    reactTitle: String = "Personal Resume Site in React";
    watchTitle: String = "Watch Animation using OpenGl";
    shipTitle: String = "Space Ship Animation using OpenGl";
    triangleTitle: String = "Moveable Triangle Animation using Opengl";
    employeeTitle: String = "Empoyee Payroll API with frontend"
    sourceCodeMsg: String = "Source Code Here!";
}
