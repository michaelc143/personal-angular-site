import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProjectsPageComponent } from './projects-page.component';
import { By } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPageComponent],
      imports: [MatCardModule, MatExpansionModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title', () => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    expect(fixture.nativeElement.querySelector('.projects-title')).toBeTruthy;
  });

  it('should have the correct number of proj cards', () => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    expect(fixture.debugElement.queryAll(By.css('mat-card')).length).toEqual(6);
  });

  it('should have react project', () => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    expect(component.reactTitle).toBeTruthy();
    expect(component.reactTitle).toEqual("Personal Resume Site in React");
    expect(fixture.nativeElement.querySelector('.react-proj-image')).toBeTruthy;
  });

  it('should have watch animation project', () => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    component = fixture.componentInstance;
    expect(component.watchTitle).toBeTruthy();
    expect(component.watchTitle).toEqual("Watch Animation using OpenGl");
    expect(fixture.nativeElement.querySelector('.watch-proj-img')).toBeTruthy;
  });
});
