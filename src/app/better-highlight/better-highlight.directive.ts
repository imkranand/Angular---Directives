import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { ElementHelper } from 'protractor';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private _eleRef: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(): void {
    // we are using host listner so we don't need setstyle in ngoninit description available in app.component.html file
    // this._renderer.setStyle(this._eleRef.nativeElement, 'background-color', 'grey');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this._renderer.setStyle(this._eleRef.nativeElement, 'background-color', 'grey');
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this._renderer.setStyle(this._eleRef.nativeElement, 'background-color', 'transparent');
  }



}
