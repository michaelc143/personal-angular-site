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
  });

  it('should have the internship title', () => {
    expect(component.internship).toBeTruthy();
    expect(component.internship).toEqual("Software Engineer Intern - Entegral (August 2023 - Current)");
  });

  it('should have the internship topic', () => {
    expect(component.internshipTopic).toBeTruthy();
    expect(component.internshipTopic).toEqual("Developed, tested, and deployed user interface features in Angular TypeScript, as well as new API endpoints and features in Java Spring Boot");
  });

  it('should have the webdev uw title', () => {
    expect(component.webdevUW).toBeTruthy();
    expect(component.webdevUW).toEqual("WebDev UW (August 2020 - Current)");
  });

  it('should have the webdev uw topic', () => {
    expect(component.webdevUWTopic).toBeTruthy();
    expect(component.webdevUWTopic).toEqual("UW-Madison student organization focused on web development");
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
    expect(component.degreeTopic).toEqual("Pursuing bachelor's of science in computer science");
  });
});
