import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-accordion",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-accordion">
      <button class="asdf-accordion-header" (click)="toggleAccordion()">
        {{ title }}
        <span class="asdf-accordion-icon">{{ open ? "▿" : "▹" }}</span>
      </button>
      <div class="asdf-accordion-content" *ngIf="open">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
  @Input() title: string = "Accordion Title";
  @Input() open: boolean = false;

  toggleAccordion() {
    this.open = !this.open;
  }
}
