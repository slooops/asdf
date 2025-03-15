import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "asdf-input",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-input-group">
      <label *ngIf="label" [for]="id">{{ label }}</label>
      <input
        [id]="id"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        [disabled]="disabled"
        (input)="onInput($event)"
        class="asdf-input"
      />
    </div>
  `,
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input() id: string = "";
  @Input() label?: string;
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() value: string = "";
  @Input() disabled: boolean = false;

  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.valueChange.emit(inputElement.value);
  }
}
