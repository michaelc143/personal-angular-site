import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { DarkModeService } from 'angular-dark-mode';

interface Job {
  role: string;
  company: string;
  dateRange: string;
  topics: string[];
}

interface SkillGroup {
  title: string;
  items: { label: string; logo?: string }[];
}

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule, MatChipsModule],
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent implements OnInit {

  isDarkMode = false;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  jobs: Job[] = [
    {
      role: 'Development Consultant',
      company: 'Esker',
      dateRange: 'Oct. 2025 – Present',
      topics: [
        'Co-led an internal AI adoption initiative, integrating LLM-powered development tooling across software delivery and consulting workflows.',
        'Engineered custom LLM agents and skills to accelerate software delivery and automate consulting processes.',
        'Led Order Management and Custom Inquiries Management implementations for enterprise SAP customers, owning end-to-end development and client delivery.',
        'Delivered the world\'s first auto-update Source-to-Pay (S2P) project - a groundbreaking automated upgrade solution for Esker\'s S2P platform.'
      ]
    },
    {
      role: 'Associate Development Consultant',
      company: 'Esker',
      dateRange: 'Aug. 2024 – Oct. 2025',
      topics: [
        'Architected and implemented a custom Esker solution from scratch to process SAP nomination orders, improving data accuracy and streamlining order handling across client workflows.',
        'Delivered software development and consulting services across Customer Service, Accounts Payable, Claims and Deductions, and custom B2B document processing solutions.'
      ]
    },
    {
      role: 'Full Stack Software Engineer Intern',
      company: 'Entegral Holdings',
      dateRange: 'Jun. 2023 – Aug. 2023',
      topics: [
        'Built and deployed full-stack features using Angular, TypeScript, and Java Spring Boot, including new UI components and RESTful API endpoints.',
        'Migrated an internal data integrity tool to Google Cloud Platform, owning CI/CD pipeline setup via GitLab, GCP service integration, workload deployment, and observability improvements.'
      ]
    }
  ];

  skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      items: [
        { label: 'Java', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/java-icon.png' },
        { label: 'Python', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/python-logo.png' },
        { label: 'TypeScript', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/typescript-icon.png' },
        { label: 'JavaScript', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/a9301d9fae2f80222dcc8ce359364846048a6692/src/app/logos/js-logo.svg' },
        { label: 'C', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/c-icon.png' },
        { label: 'HTML & CSS', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/html-css-icon.png' },
      ]
    },
    {
      title: 'Frameworks',
      items: [
        { label: 'Angular', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/angular-logo.png' },
        { label: 'React', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/react-icon.png' },
        { label: 'React Native', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/react-icon.png' },
        { label: 'Spring Boot', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/spring-logo.png' },
        { label: 'Flask', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/flask.png' },
      ]
    },
    {
      title: 'Databases',
      items: [
        { label: 'MySQL' },
      ]
    },
    {
      title: 'Tools & Platforms',
      items: [
        { label: 'Git', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/git%20logo.png' },
        { label: 'Docker', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/ad77ae7808b31523a8635f5524b2b6bfbb714318/src/app/logos/docker-logo.svg' },
        { label: 'Google Cloud Platform', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/gcp-icon.png' },
        { label: 'GitLab CI/CD', logo: 'https://raw.githubusercontent.com/michaelc143/personal-angular-site/main/src/app/logos/cicd-logo.png' },
      ]
    }
  ];
}
