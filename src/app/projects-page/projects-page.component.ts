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
      title: 'WebApp Template',
      description: 'A full-stack web application template with a pre-configured Angular frontend and Spring Boot backend. Built to eliminate boilerplate when starting new projects.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/appTemplate.png',
      tags: ['Angular', 'Spring Boot', 'TypeScript'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/AppTemplate' }
      ]
    },
    {
      title: 'Euchre Card Engine',
      description: 'A rules engine for the Euchre card game, implementing full game logic including trump selection, trick-taking, and scoring. Built in Python with a clean API.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/euchre.png',
      tags: ['Python', 'Game Logic'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/Card-engine' }
      ]
    },
    {
      title: 'BasketballReference Python Package',
      description: 'A Python package for scraping and querying NBA stats from Basketball-Reference.com. Published to PyPI with a simple API for pulling player and team data.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/bballPackage.png',
      tags: ['Python', 'Web Scraping', 'PyPI'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/BballRefWebScraper' },
        { label: 'View on PyPI', url: 'https://pypi.org/project/bballRefWebScraper/' }
      ]
    },
    {
      title: 'Employee Payroll App',
      description: 'A full-stack payroll management application with an Angular frontend and a Spring Boot REST API backend. Supports employee CRUD operations and payroll calculations.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/emp-api.png',
      tags: ['Angular', 'Spring Boot', 'REST API'],
      links: [
        { label: 'Frontend on GitHub', url: 'https://github.com/michaelc143/EmployeePayrollFrontend' },
        { label: 'API on GitHub', url: 'https://github.com/michaelc143/EmployeePayrollApi' }
      ]
    },
    {
      title: 'Clean/Dirty Roads Machine Learning Model',
      description: 'A binary image classification model trained to distinguish clean from debris-covered roads. Built with Python and scikit-learn, using a custom image dataset.',
      image: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/projects-page/roadMachineLearning.png',
      tags: ['Python', 'Machine Learning', 'scikit-learn'],
      links: [
        { label: 'View on GitHub', url: 'https://github.com/michaelc143/roads-machine-learning' }
      ]
    }
  ];
}
