import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appForbiddenInput]'
})
export class ForbiddenInputDirective {
  regEx: RegExp;

  constructor(private elementRef: ElementRef) {  }

  @Input() set appForbiddenInput(forbiddenInputPattern: RegExp) {
    this.regEx = new RegExp(forbiddenInputPattern, 'g');
  }

  @HostListener('keyup', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    const input = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = input.replace(this.regEx, '');
  }

}
