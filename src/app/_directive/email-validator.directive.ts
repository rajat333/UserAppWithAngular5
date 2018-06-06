import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, ElementRef,Renderer, HostListener, Input } from '@angular/core';
// import { Control} from "@angular/common";
@Directive({
    selector: '[email-validator]',
    providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
  })

export class EmailValidatorDirective implements Validator {
  
   public emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   constructor(private el: ElementRef, private renderer: Renderer) { 
  }


    validate(c: AbstractControl ): {[key: string]: any} {
      
      // this.el.nativeElement.style.backgroundColor = "red";
      console.log(".....c value.....",c.value);
            if(c.value == null)
            return null;

            if(!this.emailPattern.test(c.value)){
            return {"pattern": true};
            }
            return null;
    }

  }