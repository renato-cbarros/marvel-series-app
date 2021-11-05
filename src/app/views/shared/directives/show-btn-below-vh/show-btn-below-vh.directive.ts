import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[show-btn-Below-vh]',
})
export class ShowBtnBelowVhDirective {
  private display!: string;

  @HostBinding('style.display') get getDisplay() {
    return this.display;
  }

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 700) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}
