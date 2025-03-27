import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-tag",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [ngClass]="['asdf-tag', 'asdf-tag--' + size]"
      [ngStyle]="{
        'background-color': color,
        color: textColor
      }"
    >
      {{ label }}
      <button
        *ngIf="removable"
        class="asdf-tag-remove"
        (click)="onRemove.emit()"
      >
        ✖
      </button>
    </span>
  `,
})
export class TagComponent {
  @Input() label: string = "Tag";
  @Input() color: string = "#E1E4E8"; // Default gray background
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() removable: boolean = false;

  @Output() onRemove = new EventEmitter<void>();

  get textColor(): string {
    const rgb = this.hexToRgb(this.color);
    if (!rgb) return "#373c42"; // fallback to dark grey

    const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;

    // Return white text if background is dark
    return luminance < 0.5 ? "#ffffff" : "#373c42"; // tweak the threshold if needed
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
}
