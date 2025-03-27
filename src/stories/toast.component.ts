import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-toast",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-toast" [ngClass]="'asdf-toast--' + type" *ngIf="visible">
      <i
        class="asdf-icon"
        [ngClass]="'asdf-icon-' + getIconType()"
        *ngIf="showIcon"
      ></i>
      {{ message }}
      <button class="asdf-toast-close" (click)="dismiss()">
        <i class="asdf-icon asdf-icon-close"></i>
      </button>
    </div>
  `,
})
export class ToastComponent {
  @Input() message: string = "This is a toast message!";
  @Input() type: "success" | "error" | "info" = "info";
  @Input() duration?: number;
  @Input() persistent: boolean = false;
  @Input() showIcon: boolean = true;

  @Output() onDismiss = new EventEmitter<void>();

  visible: boolean = true;

  ngOnInit(): void {
    if (!this.persistent && typeof this.duration === "number") {
      setTimeout(() => this.dismiss(), this.duration);
    }
  }

  dismiss() {
    this.visible = false;
    this.onDismiss.emit();
  }

  getIconType(): string {
    switch (this.type) {
      case "success":
        return "success";
      case "error":
        return "danger"; // ✅ matches .asdf-icon-danger
      case "info":
      default:
        return "info";
    }
  }
}
