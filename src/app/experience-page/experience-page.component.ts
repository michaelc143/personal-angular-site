import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {
  internship = "Software Engineer Intern - Entegral (August 2023 - Current)"
  internshipTopic = "Developed, tested, and deployed user interface features in Angular TypeScript, as well as new API endpoints and features in Java Spring Boot"
  webdevUW = "WebDev UW (August 2020 - Current)"
  webdevUWTopic = "UW-Madison student organization focused on web development"
  webdevWebHacks = "WebHacks 2021: Created a bingo game using React to teach computer science to users"
  degree = "Computer Science Student at the University of Wisconsin - Madison (August 2020 - Current)"
  degreeTopic = "Pursuing bachelor's of science in computer science"
  teachingAssistant = "AP JAVA Teaching Assistant (August 2019 - January 2020)"
  teachingAssistantTopic1 = "Aided in teaching AP Java to fellow high school students"
  teachingAssistantTopic2 = "Aided in teaching fellow high school students in development and debugging of projects"
  languagesTitle = "Programming Languages"
  languagesList = "Java, JavaScript, Python, TypeScript, C, HTML, CSS"
  frameworksTitle = "Frameworks"
  frameworksList = "Angular, React, SpringBoot, Three.JS"
  otherToolsTitle = "Other Tools"
  otherToolsList = "Git, Docker, Bash, Ci/Cd Deployment"
}
