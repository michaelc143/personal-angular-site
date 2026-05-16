import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  isDarkMode = false;

  homepageTitle = 'Michael Corbishley';
  toolbarTip = 'Software Development Consultant | Enterprise SaaS Architect';
  para1 = "I am a Software Development Consultant at Esker, specializing in bridging the gap between complex full-stack engineering and enterprise business strategy. I architect scalable solutions that optimize global O2C pipelines, integrating AI-driven automation into ERP ecosystems like SAP and Oracle.";
  para2 = "With a systems-focused foundation from UW–Madison, I build high-integrity applications that transform manual business processes into automated, data-driven successes. I thrive at the intersection of technical execution and high-level consultative delivery.";

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }
}