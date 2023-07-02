import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct title', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toEqual("Welcome to my website!");
  });

  it('should render the profile img', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('img')).toBeTruthy;
  });

  it('should render the footer home btn', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer')).toBeTruthy;
    expect(compiled.querySelector('footer .homeBtn')).toBeTruthy;
  });

  it('should render the github btn', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer .githubBtn')).toBeTruthy;
  });

  it('should render the linkedin btn', () => {
    const fixture = TestBed.createComponent(HomePageComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('footer .linkedinBtn')).toBeTruthy;
  });
});
