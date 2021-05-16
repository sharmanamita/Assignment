import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[DataForm]'
})
export class Viewdirective{
    
    constructor(public viewContainerRef: ViewContainerRef){}

    sendModalData(){    }
}