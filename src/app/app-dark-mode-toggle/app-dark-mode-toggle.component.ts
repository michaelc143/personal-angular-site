import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-dark-mode-toggle',
  templateUrl: './app-dark-mode-toggle.component.html',
  styleUrls: ['./app-dark-mode-toggle.component.scss']
})
export class AppDarkModeToggleComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
