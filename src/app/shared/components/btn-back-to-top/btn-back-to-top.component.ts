import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-back-to-top',
  templateUrl: './btn-back-to-top.component.html',
  styleUrls: ['./btn-back-to-top.component.scss'],
})
export class BtnBackToTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}
