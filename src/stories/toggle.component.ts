import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-toggle",
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="asdf-toggle" [ngClass]="{ 'asdf-toggle--disabled': disabled }">
      <input
        type="checkbox"
        class="asdf-toggle-input"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onToggle()"
      />
      <span
        class="asdf-toggle-track"
        [ngClass]="{
          'asdf-toggle-track--on': checked,
          'asdf-toggle-track--sm': size === 'small',
          'asdf-toggle-track--lg': size === 'large'
        }"
      >
        <span class="asdf-toggle-thumb"></span>
      </span>
      <span *ngIf="label" class="asdf-toggle-label">{{ label }}</span>
    </label>
  `,
  styleUrls: ["./toggle.component.css"],
})
export class ToggleComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label?: string;
  @Input() size: "small" | "medium" | "large" = "medium";

  @Output() checkedChange = new EventEmitter<boolean>();

  onToggle() {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.checkedChange.emit(this.checked);
    }
  }
}
