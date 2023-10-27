import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  welcomeHeader: String = "Welcome to my website!";
  toolbarTip: String = "Use the toolbar above to navigate to other pages";
  para1: String = "Hello, I'm Michael! I'm a web developer and 4th-year computer science student at UW Madison, specializing in Angular, React, Python and Java."
  para2: String = "Dedicated to providing top-notch solutions, I keep myself well-informed about the latest industry trends and cutting-edge technologies. Whether it involves building projects from the ground up or improving existing ones, I'm enthusiastic about teaming up for demanding web development challenges.";
}
