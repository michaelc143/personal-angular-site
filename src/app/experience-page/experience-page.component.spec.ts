import { MatChipsModule } from "@angular/material/chips";
import { ExperiencePageComponent } from "./experience-page.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from "@angular/material/divider";
import { By } from "@angular/platform-browser";
import { MatBadgeModule } from "@angular/material/badge";

describe('ExperiencePageComponent', () => {
    let component: ExperiencePageComponent;
    let fixture: ComponentFixture<ExperiencePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExperiencePageComponent],
            imports: [MatChipsModule, MatDividerModule, MatBadgeModule]
        });
        fixture = TestBed.createComponent(ExperiencePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have chips', () => {
        expect(fixture.debugElement.query(By.css('mat-chip'))).toBeTruthy();
    });

    it('should have 3 chips lists', () => {
        expect(fixture.debugElement.queryAll(By.css('.chips-list')).length).toEqual(3);
    });

    it('should have the correct number of chips', () => {
        expect(fixture.debugElement.queryAll(By.css('mat-chip')).length).toEqual(15);
    });

    it('should have the main title', () => {
        const h1 = fixture.debugElement.query(By.css('h1'));
        const compiled = h1.nativeElement as HTMLElement;
        expect(compiled.textContent).toBe("Experience");
    });

    it('should have the entegral title', () => {
        const title = fixture.debugElement.query(By.css('.internship-title'));
        const compiled = title.nativeElement as HTMLElement;
        expect(compiled.textContent).toBe("Software Engineer Intern - Entegral (May 2023 - August 2023)");
    });
});