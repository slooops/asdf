import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-badge",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="asdf-badge" [ngClass]="'asdf-badge--' + type">
      {{ label }}
    </span>
  `,
})
export class BadgeComponent {
  @Input() label: string = "Badge";
  @Input() type: "success" | "warning" | "error" | "neutral" = "neutral";

  get badgeType(): string {
    return `asdf-badge--${this.type}`;
  }
}
