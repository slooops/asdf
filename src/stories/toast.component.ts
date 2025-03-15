import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "asdf-toast",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-toast" [ngClass]="type" *ngIf="visible">
      {{ message }}
      <button class="asdf-toast-close" (click)="dismiss()">✖</button>
    </div>
  `,
  styleUrls: ["./toast.component.css"],
})
export class ToastComponent {
  @Input() message: string = "This is a toast message!";
  @Input() type: "success" | "error" | "info" = "info";
  @Input() duration: number = 30000;

  @Output() onDismiss = new EventEmitter<void>();

  visible: boolean = true;

  constructor() {
    setTimeout(() => this.dismiss(), this.duration);
  }

  dismiss() {
    this.visible = false;
    this.onDismiss.emit();
  }
}
