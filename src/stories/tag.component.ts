import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-tag",
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      [ngClass]="['asdf-tag', 'asdf-tag--' + size]"
      [ngStyle]="{ 'background-color': color }"
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
}
