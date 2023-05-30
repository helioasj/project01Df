import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[agatronRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
      el.nativeElement.style.color = '#de1a2a'
   }

}
