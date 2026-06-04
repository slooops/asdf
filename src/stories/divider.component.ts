import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-divider",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="asdf-divider"
      [ngClass]="{
        'asdf-divider--vertical': orientation === 'vertical',
        'asdf-divider--with-label': !!label
      }"
    >
      <span *ngIf="label && orientation === 'horizontal'" class="asdf-divider-label">
        {{ label }}
      </span>
    </div>
  `,
  styleUrls: ["./divider.component.css"],
})
export class DividerComponent {
  @Input() orientation: "horizontal" | "vertical" = "horizontal";
  @Input() label?: string;
}
