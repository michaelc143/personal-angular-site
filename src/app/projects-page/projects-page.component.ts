import { Component, OnInit } from '@angular/core';
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
  appTemplateTitle = 'WebApp Template';
  euchreTitle = 'Euchre Card Engine';
  bballTitle = 'BasketballReference Python Package';
  employeeTitle = 'Employee Payroll App';
  machineLearningTitle = 'Clean/Dirty Roads Machine Learning Model';

  getLinkClass(title: string): string {
    const map: Record<string, string> = {
      'WebApp Template': 'template-links',
      'Euchre Card Engine': 'euchre-links',
      'BasketballReference Python Package': 'bball-links',
      'Employee Payroll App': 'api-links',
      'Clean/Dirty Roads Machine Learning Model': 'machine-learning-links'
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
