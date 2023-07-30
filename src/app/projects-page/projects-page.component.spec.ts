import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { ProjectsPageComponent } from './projects-page.component';

describe('ProjectsPageComponent', () => {
  let component: ProjectsPageComponent;
  let fixture: ComponentFixture<ProjectsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsPageComponent],
      imports: [MatCardModule]
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
