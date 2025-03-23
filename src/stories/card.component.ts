import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "asdf-card",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="container ? 'container' : 'card'">
      <div class="card-stack">
        <div class="card-title-stack">
          <!-- Conditional Rendering of Title and Subtitle -->
          <p class="text-md text-muted" *ngIf="showTitle">{{ title }}</p>
          <p class="text-sm text-muted" *ngIf="showSubtitle">{{ subtitle }}</p>
        </div>

        <!-- Single div with dynamic class -->
        <div
          [ngClass]="showPlaceholder ? 'card-placeholder' : 'card-content'"
          (click)="navigateTo()"
        >
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() title: string = "";
  @Input() subtitle: string = "";
  @Input() route: string = "";
  @Input() container: boolean = false;
  @Input() showTitle: boolean = true;
  @Input() showSubtitle: boolean = true;
  @Input() showPlaceholder: boolean = true; // Determines the applied class

  constructor(private router: Router) {}

  navigateTo(): void {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
