import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-tooltip",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="asdf-tooltip-wrapper">
      <ng-content></ng-content>
      <span
        class="asdf-tooltip"
        [ngClass]="'asdf-tooltip--' + position"
        [attr.role]="'tooltip'"
      >
        {{ text }}
      </span>
    </span>
  `,
  styleUrls: ["./tooltip.component.css"],
})
export class TooltipComponent {
  @Input() text: string = "Tooltip";
  @Input() position: "top" | "bottom" | "left" | "right" = "top";
}
