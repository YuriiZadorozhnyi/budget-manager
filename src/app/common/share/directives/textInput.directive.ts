import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appControlInput]'
})
export class TextInputDirective {
  regEx: RegExp;

  constructor(private elementRef: ElementRef) {  }

  @Input() set appControlInput(inputType: string) {
    switch (inputType) {
      case 'text': this.regEx = /[^a-z]/g;
      break;
      case 'digits': this.regEx = /[^0-9]/g;
      break;
      case 'alphaNumeric': this.regEx = /\W/g;
      break;
      default: this.regEx = /\W/g;
    }
  }

  @HostListener('keyup', ['$event'])
  private onKeyUp(event: KeyboardEvent) {
    const input = this.elementRef.nativeElement.value;
    this.elementRef.nativeElement.value = input.replace(this.regEx, '');
  }

}
