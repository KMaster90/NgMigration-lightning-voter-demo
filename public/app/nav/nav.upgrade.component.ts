import {Directive, ElementRef, Injector} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";

@Directive({
    selector: 'app-nav',
    jit: true
})
export class NavComponentEs6 extends UpgradeComponent{
    constructor(elementRef: ElementRef, injector: Injector) {
        super('nav', elementRef,injector);
    }
}