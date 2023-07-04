import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePageComponent } from './experience-page.component';

describe('ExperiencePageComponent', () => {
  let component: ExperiencePageComponent;
  let fixture: ComponentFixture<ExperiencePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperiencePageComponent]
    });
    fixture = TestBed.createComponent(ExperiencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    // expect(fixture.nativeElement.querySelector(''));
  });

  it('should have the internship title', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.internship-title')).toBeTruthy;
  });

  it('should have the internship topic 2', () => {
    expect(component.internshipTopic2).toBeTruthy();
    expect(component.internshipTopic2).toEqual("Contributed to the development of an internal tool, including establishing a continuous integration and development pipeline on GitLab, designing a Dockerfile, organizing file structure, and tracking business value metrics for data integrity assurance.");
  });

  it('should have the internship topic', () => {
    expect(component.internshipTopic).toBeTruthy();
    expect(component.internshipTopic).toEqual("Engineered and deployed captivating user interface features using Angular TypeScript, while seamlessly integrating cutting-edge API endpoints and functionalities within Java Spring Boot.");
  });

  it('should have the webdev uw title', () => {
    expect(component.webdevUW).toBeTruthy();
    expect(component.webdevUW).toEqual("WebDev UW (August 2020 - Current)");
  });

  it('should have the webdev uw topic', () => {
    expect(component.webdevUWTopic).toBeTruthy();
    expect(component.webdevUWTopic).toEqual("UW-Madison student organization dedicated to advancing web development skills");
  });

  it('should have the webhacks desc', () => {
    expect(component.webdevWebHacks).toBeTruthy();
    expect(component.webdevWebHacks).toEqual("WebHacks 2021: Created a bingo game using React to teach computer science to users");
  });

  it('should have the degree title', () => {
    expect(component.degree).toBeTruthy();
    expect(component.degree).toEqual("Computer Science Student at the University of Wisconsin - Madison (August 2020 - Current)");
  });

  it('should have the degree topic', () => {
    expect(component.degreeTopic).toBeTruthy();
    expect(component.degreeTopic).toEqual("Actively pursuing a Bachelor's of Science degree in Computer Science, delving into the realms of knowledge to advance expertise in cutting-edge technologies and problem-solving methodologies.");
  });
});
