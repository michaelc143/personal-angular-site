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

  homepageTitle: String = "Michael Corbishley";
  toolbarTip: String = "Full Stack Software Engineer & Consultant";
  para1: String = "I am a passionate software engineer with expertise in full-stack development, specializing in modern web technologies and cloud solutions. With a Bachelor's degree in Computer Science from the University of Wisconsin-Madison, I focus on creating scalable, efficient applications that solve real-world problems."
  para2: String = "My experience spans across enterprise software development, AI integration, and cloud infrastructure. I enjoy working on challenging projects that push the boundaries of technology while maintaining clean, maintainable code. Let's build something amazing together.";
}
