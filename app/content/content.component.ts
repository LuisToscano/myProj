import { Component, OnInit, ElementRef } from '@angular/core';
import { ConstantsProvider } from '../providers/constants.provider';

@Component({
    selector: 'content',
    template: '<ng-content></ng-content>',
    providers: [ConstantsProvider]
})
export class ContentComponent implements OnInit {
    
    public constants : any;

    constructor( public el: ElementRef, constantProv : ConstantsProvider) {
        this.constants = constantProv.getConstants();
    }

	ngOnInit(){
     let slides = this.el.nativeElement.getElementsByTagName(this.constants.components.tags.slide);
     if(slides.length > 0){
         console.log('slides ok');
     }else{
         console.warn(this.constants.messages.error.noSlides);
     }
  }
}
