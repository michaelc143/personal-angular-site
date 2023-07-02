import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  welcomeHeader: String = "Welcome to my website!";
  toolbarTip: String = "Use the toolbar above to navigate to other pages";
  para1: String = "Hello, I'm Michael! I'm a web developer and computer science student at UW Madison, specializing in Angular and Java. I possess a strong foundation in software development principles and methodologies, constantly expanding my knowledge through academic pursuits and practical experience."
  para2: String = "Committed to delivering high-quality solutions, I stay up to date with the latest industry trends and technologies. Whether it's starting from scratch or enhancing existing projects, I'm eager to collaborate on challenging web development endeavors. Let's connect and bring your ideas to life using Angular and Java!";
}
