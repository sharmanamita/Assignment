import { ComponentFactoryResolver, Injectable, ViewContainerRef } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataFormService{

    constructor(private componentFac: ComponentFactoryResolver){ }

    async createComponent(viewRef: ViewContainerRef, flag: string){
        const { AdddataformComponent } = await import('./adddataform.component');

        let component = viewRef.createComponent(this.componentFac.resolveComponentFactory(AdddataformComponent));
        component.instance.openModel();
        if(flag === 'segment') component.instance.descrFlag = true;
        if(flag === 'table') component.instance.colorFlag = true;
        return component;
    }
}