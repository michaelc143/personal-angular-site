import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverEffectComponent } from '../app/hover-effect/hover-effect.component';

describe('HoverEffectComponent', () => {
  let component: HoverEffectComponent;
  let fixture: ComponentFixture<HoverEffectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverEffectComponent]
    });
    fixture = TestBed.createComponent(HoverEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
