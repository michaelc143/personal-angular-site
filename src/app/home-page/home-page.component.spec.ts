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

  it('should generate the angular material card title h1', () => {
    const h1 = fixture.debugElement.query(By.css('mat-card-title h1'));
    const compiled = h1.nativeElement as HTMLElement;
    expect(compiled.textContent).toBe("Welcome to my website!");
  });

  it('should generate the angular material card title h2', () => {
    const h2 = fixture.debugElement.query(By.css('mat-card-title h2'));
    const compiled = h2.nativeElement as HTMLElement;
    expect(compiled.textContent).toBe("Use the toolbar above to navigate to other pages");
  });

  it('should generate the angular material card image', () => {
    expect(fixture.debugElement.query(By.css('mat-card img'))).toBeTruthy();
  });

});
