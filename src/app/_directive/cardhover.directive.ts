
import { Directive, ElementRef,Renderer, HostListener, Input } from '@angular/core';
 
@Directive({
  selector: '[card-hover]',
})

export class CardHoverDirective {
 
    constructor(private el: ElementRef, private renderer: Renderer) { 
        // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue');
        console.log(",.....in dir...",el);
        el.nativeElement.style.backgroundColor = "white";
    }

//   @Input() defaultColor: string;
//   @Input('appHighlight') highlightColor: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.el.nativeElement.style.backgroundColor = "red";
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }
 
  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if (e.shiftKey && e.keyCode == 9) {
      console.log('shift and tab');
    }
    this.el.nativeElement.style.backgroundColor = "gray";
}
@HostListener('keyUp', ['$event']) onKeyUp(e) {
    if (e.shiftKey && e.keyCode == 9) {
      console.log('shift and tab');
    }
    this.el.nativeElement.style.backgroundColor = "blue";
}

//   private highlight(color: string) {
//     this.el.nativeElement.style.backgroundColor = color;
//   }

}