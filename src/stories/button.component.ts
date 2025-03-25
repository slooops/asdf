import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-button",
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{ 'background-color': backgroundColor }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `,
})
export class ButtonComponent {
  /** Is this the principal call to action on the page? */
  @Input()
  primary = false;

  /** Is this a tertiary button? */
  @Input()
  tertiary = false;

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** How large should the button be? */
  @Input()
  size: "small" | "medium" | "large" = "medium";

  @Input()
  danger = false;

  @Input()
  disabled = false;

  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "Button";

  /** Optional click handler */
  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    let mode;

    if (this.danger) {
      mode = "asdf-button--danger";
    } else if (this.tertiary) {
      mode = "asdf-button--tertiary";
    } else if (this.primary) {
      mode = "asdf-button--primary";
    } else {
      mode = "asdf-button--secondary";
    }

    const classList = ["asdf-button", `asdf-button--${this.size}`, mode];

    if (this.disabled) {
      classList.push("asdf-button--disabled");
    }

    return classList;
  }
}
