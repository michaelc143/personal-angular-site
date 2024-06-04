import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  isDarkMode: boolean = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  homepageTitle: String = "Hey I'm Michael!";
  toolbarTip: String = "Use the toolbar to navigate to other pages!";
  para1: String = "I'm a UW - Madison Alumni with a Bachelor of Science in Computer Science, with a passion for web development using frameworks like Angular and React, API development using Spring Boot and Flask, as well as machine learning and data science with Python."
  para2: String = "Dedicated to providing top-notch solutions, I keep myself well-informed about the latest industry trends and cutting-edge technologies. Whether it involves building projects from the ground up or improving existing ones, I'm enthusiastic about teaming up for demanding web development challenges.";
}
