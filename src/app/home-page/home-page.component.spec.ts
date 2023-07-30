import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      imports: [MatCardModule]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate the angular material card', () => {
    expect(fixture.debugElement.query(By.css('mat-card'))).toBeTruthy();
  });

  it('should generate the angular material card title', () => {
    expect(fixture.debugElement.query(By.css('mat-card-title'))).toBeTruthy();
  });

  // const compiled = fixture.nativeElement as HTMLElement;
});
