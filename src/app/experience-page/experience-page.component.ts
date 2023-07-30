import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {
  internship = "Software Engineer Intern - Entegral (May 2023 - Current)"
  internshipTopics = ["Engineered and deployed captivating user interface features using Angular TypeScript, while seamlessly integrating cutting-edge API endpoints and functionalities within Java Spring Boot.",
  "Contributed to the development of an internal tool, including establishing a continuous integration and development pipeline on GitLab, designing a Dockerfile, organizing file structure, and tracking business value metrics for data integrity assurance.",
  "Enhanced my professional development by actively participating in weekly hour-long technology seminars covering a diverse range of topics such as microservice architecture, machine learning, and cloud deployment.",
  "Collaborated with business representatives in bi-weekly meetings to showcase ongoing progress towards quarterly objectives and deliver captivating demonstrations of new features to stakeholders."
  ]
  webdevUW = "WebDev UW (August 2020 - Current)"
  webdevUWTopics = ["UW-Madison student organization dedicated to advancing web development skills",
  "WebHacks 2021: Created a bingo game using React to teach computer science to users"
  ]
  degree = "Computer Science Student at the University of Wisconsin - Madison (August 2020 - Current)"
  degreeTopic = "Actively pursuing a Bachelor's of Science degree in Computer Science, delving into the realms of knowledge to advance expertise in cutting-edge technologies and problem-solving methodologies."
  degreeCourses = "Computer Engineering & Memory Management, Introduction To Algorithms, Linear Algebra, Discrete Math, Artificial Intelligence, Computer Graphics, Java Programming (I - III), Operating Systems, Cryptography"
  degreeCourseTitle = "Major Related Course List"
  teachingAssistant = "AP JAVA Teaching Assistant (August 2019 - January 2020)"
  teachingAssistantTopics = ["Played an instrumental role in instructing and mentoring high school students in AP Java, fostering their understanding and mastery of advanced Java concepts.",
  "Provided invaluable support in guiding and empowering fellow high school students in project development and debugging, facilitating their growth and proficiency in software engineering practices."  
  ]
  languagesTitle = "Programming Languages"
  languagesList = ["Java", "JavaScript", "Python", "TypeScript", "C", "HTML & CSS"]
  frameworksTitle = "Frameworks"
  frameworksList = ["Angular", "React", "SpringBoot", "Three.JS"]
  otherToolsTitle = "Other Tools"
  otherToolsList = ["Git", "Docker", "Bash", "CI/CD Deployments", "Google Cloud Platform"]
}
