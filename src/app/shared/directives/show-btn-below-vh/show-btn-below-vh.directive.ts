import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[show-btn-Below-vh]',
})
export class ShowBtnBelowVhDirective {
  @Input() elementWithScroll!: HTMLElement;

  private display!: string;

  @HostBinding('style.display') get getDisplay() {
    return this.display;
  }

  ngOnInit() {
    this.onScrollElement();
  }

  onScrollElement = () => {
    if (this.elementWithScroll)
      this.elementWithScroll.onscroll = () => {
        if (this.elementWithScroll.scrollTop > 700) {
          this.display = 'block';
        } else {
          this.display = 'none';
        }
      };
  };
}
