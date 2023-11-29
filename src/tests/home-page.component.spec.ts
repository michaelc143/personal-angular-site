import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from 'src/app/home-page/home-page.component';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { HoverEffectComponent } from 'src/app/hover-effect/hover-effect.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, HoverEffectComponent],
      imports: [MatCardModule]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate hover effect h1', () => {
    const h1 = fixture.debugElement.query(By.css('h1'));
    const compiled = h1.nativeElement as HTMLElement;
    expect(compiled.textContent).toBe("Hey I'm Michael!");
  });

  it('should generate the angular material card', () => {
    expect(fixture.debugElement.query(By.css('mat-card'))).toBeTruthy();
  });

  it('should generate the angular material card title h2', () => {
    const h2 = fixture.debugElement.query(By.css('mat-card-title h2'));
    const compiled = h2.nativeElement as HTMLElement;
    expect(compiled.textContent).toBe("Use the toolbar to navigate to other pages!");
  });

  it('should generate the angular material card image', () => {
    expect(fixture.debugElement.query(By.css('mat-card img'))).toBeTruthy();
  });

});
