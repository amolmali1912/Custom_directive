import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: 'yellowBg-directive'
})

export class yellowBgDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.background = 'yellow';
    }
}