import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn-back-to-top',
  templateUrl: './btn-back-to-top.component.html',
  styleUrls: ['./btn-back-to-top.component.scss'],
})
export class BtnBackToTopComponent {
  @Input() elementWithScroll!: HTMLElement;

  backToTop = () => {
    this.elementWithScroll.scrollTop = 0; // For Safari
  };
}
