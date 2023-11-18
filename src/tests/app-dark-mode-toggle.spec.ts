import { AppDarkModeToggleComponent } from "src/app/app-dark-mode-toggle/app-dark-mode-toggle.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from "@angular/platform-browser";
import { MatIconModule } from "@angular/material/icon";

describe('DarkModeComponent', () => {
    let component: AppDarkModeToggleComponent;
    let fixture: ComponentFixture<AppDarkModeToggleComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppDarkModeToggleComponent],
            imports: [MatIconModule]
        });
        fixture = TestBed.createComponent(AppDarkModeToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create the button', () => {
        expect(fixture.nativeElement.querySelector('button')).toBeTruthy();
    })

    it('should toggle darkmode', () => {
        fixture.nativeElement.querySelector('button').click();
        expect(fixture.nativeElement.querySelector('mat-icon')).toBeTruthy();
    })
    
});