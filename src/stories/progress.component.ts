import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-progress",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="asdf-progress"
      [ngClass]="{
        'asdf-progress--indeterminate': indeterminate,
        'asdf-progress--error': error
      }"
    >
      <div
        class="asdf-progress-bar"
        [style.width.%]="indeterminate ? null : progress"
        [style.backgroundColor]="error ? null : color"
      ></div>
    </div>
  `,
})
export class ProgressComponent {
  @Input() progress: number = 0;
  @Input() indeterminate: boolean = false;
  @Input() error: boolean = false;
  @Input() color: string = "#049fd9"; // Default to primary color
}
