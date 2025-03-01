import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "asdf-stepper",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flowchart-container">
      <div class="slider-bar">
        <div *ngFor="let step of steps; let i = index" class="step-wrapper">
          <!-- Circle with Step Label -->
          <div class="circle-wrapper-loop">
            <p class="circle-caption-loop">{{ step.label }}</p>
            <div
              class="circle-loop"
              [ngClass]="{ 'circle-active': i === activeStep }"
            ></div>
            <p class="circle-subcaption">
              {{ step.subCaption || "N/A" }}
            </p>
          </div>

          <!-- Chevron for Connecting Steps -->
          <div *ngIf="i < steps.length - 1" class="chevron-wrapper-loop">
            <div class="chevron"></div>
            <div class="chevron-white"></div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./stepper.css"],
})
export class StepperComponent {
  /** Array of steps for the stepper */
  @Input() steps: Array<{ label: string; subCaption?: string }> = [];

  /** Index of the active step */
  @Input() activeStep: number = 0;
}
