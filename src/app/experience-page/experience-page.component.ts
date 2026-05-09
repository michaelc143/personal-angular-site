import { Component, Input } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

  isDarkMode: boolean = false;

  ngOnInit() {
    this.darkModeService.darkMode$.subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
    });
  }

  constructor(private darkModeService: DarkModeService) {}
  eskerTitle: String = "Development Consultant - Esker (Oct. 2025 - Present)";
  eskerTopics = ["Helped lead internal AI adoption initiative, integrating AI-powered development tooling across software development and consulting workflows.",
  "Engineered custom LLM agents and skills to accelerate software delivery and automate consulting processes.",
  "Led Order Management and Custom Inquiries Management implementations for enterprise SAP customers, owning end-to-end development and client delivery.",
  "Led the world's first auto-update Source-to-Pay (S2P) project, delivering a groundbreaking automated upgrade solution for Esker's S2P platform."
  ]
  associateTitle: String = "Associate Development Consultant - Esker (Aug. 2024 - Oct. 2025)";
  associateTopics = ["Architected and implemented a custom Esker solution from scratch to process SAP nomination orders, streamlining order handling and improving data accuracy across client workflows.",
  "Delivered software development and consulting services across Customer Service, Accounts Payable, Claims and Deductions, and custom B2B document processing solutions."
  ]
  internship = "Full Stack Software Engineer Intern - Entegral Holdings (June 2023 - Aug. 2023)"
  internshipTopics = ["Built and deployed full-stack features using Angular, TypeScript, and Java Spring Boot, including new UI components and RESTful API endpoints.",
  "Migrated an internal data integrity tool to Google Cloud Platform, owning CI/CD pipeline setup via GitLab, GCP service integration, workload deployment, and observability improvements including linting and metric collection."
  ]
  languagesTitle = "Programming Languages"
  languagesList = ["Java", "Python", "C", "MySQL", "JavaScript", "TypeScript", "HTML & CSS"]
  frameworksTitle = "Frameworks"
  frameworksList = ["React", "Angular", "React Native", "Flask", "SpringBoot"]
  otherToolsTitle = "Other Tools"
  otherToolsList = ["Git", "Docker", "Google Cloud Platform", "GitLab CI/CD"]
  experienceYearsLangs = [4,3,2,3,4,3,6]
  experienceYearsFrames = [2,2,1,1,2]
  experienceYearsTools = [5,2,2,2]
}
