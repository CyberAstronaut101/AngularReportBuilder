import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[reportHost]',
})
export class DynamicChildLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
