import { Directive, ElementRef, Renderer, AfterViewInit, Input } from "@angular/core";

@Directive({
    selector: "[mydpfocus]"
})

export class FocusDirective implements AfterViewInit {
    @Input("mydpfocus") value: string;

    constructor(private el: ElementRef, private renderer: Renderer) {}

    ngAfterViewInit() {
        if (this.value === "0") {
            return;
        }
        this.renderer.invokeElementMethod(this.el.nativeElement, "focus", []);
    }
}
