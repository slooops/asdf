import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-accordion",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-accordion" [class.borderless]="borderless">
      <button
        class="asdf-accordion-header text-md text-muted"
        (click)="toggleAccordion()"
      >
        {{ title }}
        <i class="icon {{ open ? 'icon-caret-down' : 'icon-caret-right' }}"></i>
      </button>

      <div class="asdf-accordion-wrapper" [class.open]="open">
        <div class="asdf-accordion-content" *ngIf="open">
          <ng-content></ng-content>

          <!-- Optional placeholder -->
          <div
            *ngIf="showPlaceholder"
            class="placeholder-well"
            (mousemove)="updateCoords($event)"
          ></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./accordion.component.scss"],
})
export class AccordionComponent {
  @Input() title: string = "Accordion Title";
  @Input() open: boolean = false;
  @Input() borderless: boolean = false;
  @Input() showPlaceholder: boolean = true;

  toggleAccordion() {
    this.open = !this.open;
  }
  updateCoords(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.style.setProperty("--x", `${event.offsetX}px`);
    target.style.setProperty("--y", `${event.offsetY}px`);
  }
}
