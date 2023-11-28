import { Component, ElementRef, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrls: ['./hover-effect.component.scss']
})
export class HoverEffectComponent implements OnDestroy {
  private letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  text2beshown: string = 'Hey Im Michael!';
  private interval: any = null;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startHoverEffect(): void {
    clearInterval(this.interval);

    this.interval = setInterval(() => {
      this.text2beshown = this.text2beshown
        .split('')
        .map(() => this.letters[Math.floor(Math.random() * 26)])
        .join('');
    }, 50);
  }

  stopHoverEffect(): void {
    clearInterval(this.interval);
    this.text2beshown = 'Hey Im Michael!';
  }
}
