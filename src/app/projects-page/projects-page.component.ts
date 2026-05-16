import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { DarkModeService } from 'angular-dark-mode';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  tags: string[];
}

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButtonModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  // Keep individual title properties for existing tests
  appTemplateTitle = 'Enterprise-Scale Architecture Kit';
  euchreTitle = 'Real-Time Game Logic Engine';
  bballTitle = 'Automated Data Extraction Pipeline';
  employeeTitle = 'Full-Stack ERP Human Capital API';
  machineLearningTitle = 'AI Road Condition Classifier';

  getLinkClass(title: string): string {
    const map: Record<string, string> = {
      'Enterprise-Scale Architecture Kit': 'template-links',
      'Real-Time Game Logic Engine': 'euchre-links',
      'Automated Data Extraction Pipeline': 'bball-links',
      'Full-Stack ERP Human Capital API': 'api-links',
      'AI Road Condition Classifier': 'machine-learning-links'
    };
    return map[title] ?? 'project-links';
  }

  projects: Project[] = [
    {
      title: 'Enterprise-Scale Architecture Kit',
      description: 'A production-ready full-stack boilerplate architected with Angular and Spring Boot. Features modular design patterns and clean architecture principles to accelerate the deployment of scalable enterprise applications.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/appTemplate.png',
      tags: ['Angular', 'Spring Boot', 'Architecture'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/AppTemplate' }
      ]
    },
    {
      title: 'Real-Time Game Logic Engine',
      description: 'A high-integrity rules engine for the Euchre card game, featuring complex state management and real-time validation logic. Built with Python to demonstrate rigorous algorithmic design.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/euchre.png',
      tags: ['Python', 'State Management'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/Card-engine' }
      ]
    },
    {
      title: 'Automated Data Extraction Pipeline',
      description: 'A specialized Python package published to PyPI for high-throughput NBA data scraping. Optimized for reliability and ease of integration into larger data science workflows.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/bballPackage.png',
      tags: ['Python', 'ETL', 'PyPI'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/BballRefWebScraper' },
        { label: 'View on PyPI', url: 'https://pypi.org/project/bballRefWebScraper/' }
      ]
    },
    {
      title: 'Full-Stack ERP Human Capital API',
      description: 'A comprehensive payroll and employee management system with a robust Spring Boot REST API. Focuses on secure data handling and seamless frontend-to-backend orchestration.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/emp-api.png',
      tags: ['Angular', 'Spring Boot', 'REST API'],
      links: [
        { label: 'Frontend on GitHub', url: 'https://github.com/michaelc143/EmployeePayrollFrontend' },
        { label: 'API on GitHub', url: 'https://github.com/michaelc143/EmployeePayrollApi' }
      ]
    },
    {
      title: 'AI Road Condition Classifier',
      description: 'A machine learning model trained for binary image classification of road surfaces. Demonstrates experience in data curation, model training, and integrating AI into functional pipelines.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/roadMachineLearning.png',
      tags: ['Python', 'Scikit-Learn', 'ML'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/roads-machine-learning' }
      ]
    }
  ];
}
