import { ShowBtnBelowVhDirective } from './show-btn-below-vh.directive';

describe('ShowBtnBelowVhDirective', () => {
  it('should create an instance', () => {
    const directive = new ShowBtnBelowVhDirective();
    expect(directive).toBeTruthy();
  });

  // it('(U) should be display block', () => {
  //   const directive = new ShowBtnBelowVhDirective();

  //   document.body.scrollTop = 100; // For Safari
  //   document.documentElement.scrollTop = 100; // For Chrome, Firefox, IE and Opera

  //   directive.onWindowScroll();

  //   expect(directive.getDisplay).toEqual('block');
  // });

  it('(U) should be display none', () => {
    const directive = new ShowBtnBelowVhDirective();
    directive.onWindowScroll();

    expect(directive.getDisplay).toEqual('none');
  });
});
