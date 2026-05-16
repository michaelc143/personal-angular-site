import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isDarkMode = false;

  homepageTitle = 'Michael Corbishley';
  toolbarTip = 'Full Stack Software Engineer & Consultant';
  para1 = "I'm a full stack software engineer based in Wisconsin, specializing in modern web applications and cloud infrastructure. I graduated from UW–Madison with a degree in Computer Science and focus on building things that are fast, accessible, and built to last.";
  para2 = "I've worked across enterprise software, AI integration, and distributed systems. I care about clean architecture, readable code, and shipping things that work. If you have a problem worth solving, I'd love to hear about it.";

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }
}