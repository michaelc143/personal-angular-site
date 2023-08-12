import { MatChipsModule } from "@angular/material/chips";
import { ExperiencePageComponent } from "./experience-page.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDividerModule } from "@angular/material/divider";
import { By } from "@angular/platform-browser";

describe('ExperiencePageComponent', () => {
    let component: ExperiencePageComponent;
    let fixture: ComponentFixture<ExperiencePageComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ExperiencePageComponent],
            imports: [MatChipsModule, MatDividerModule]
        });
        fixture = TestBed.createComponent(ExperiencePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have chips lists', () => {
        expect(fixture.debugElement.query(By.css('mat-chip-listbox'))).toBeTruthy();
    });

    it('should have the correct number of chips listboxes', () => {
        expect(fixture.debugElement.queryAll(By.css('mat-chip-listbox')).length).toEqual(5);
    });

    it('should have the correct number of chips', () => {
        expect(fixture.debugElement.queryAll(By.css('mat-chip')).length).toEqual(15);
    });
});