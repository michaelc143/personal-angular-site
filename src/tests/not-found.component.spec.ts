import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have h1 element', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toContain('404 - Page Not Found');
  });

  it('should have p element', () => {
    const pElement = fixture.nativeElement.querySelector('p');
    expect(pElement).toBeTruthy();
    expect(pElement.textContent).toContain('Sorry, the page you are looking for does not exist.');
  });
});
