import { CommonModule } from "@angular/common";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { ButtonComponent } from "./button.component";

@Component({
  selector: "asdf-modal",
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <div class="asdf-modal-backdrop" *ngIf="isOpen" (click)="close()"></div>
    <div class="asdf-modal" *ngIf="isOpen">
      <div class="asdf-modal-header">
        <h3>{{ title }}</h3>
        <button class="asdf-modal-close" (click)="close()">✖</button>
      </div>
      <div class="asdf-modal-body">
        <ng-content></ng-content>
      </div>
      <div class="asdf-modal-footer" *ngIf="showActions">
        <asdf-button
          label="Cancel"
          [primary]="false"
          (click)="close()"
        ></asdf-button>
        <asdf-button
          label="Confirm"
          [primary]="true"
          (click)="confirm()"
        ></asdf-button>
      </div>
    </div>
  `,
  styleUrls: ["./modal.component.css"],
})
export class ModalComponent {
  @Input() title: string = "Modal Title";
  @Input() isOpen: boolean = false;
  @Input() showActions: boolean = true;
  @Output() closeModal = new EventEmitter<void>();
  @Output() confirmAction = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }

  confirm() {
    this.confirmAction.emit();
  }
}
