import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-breadcrumb",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="asdf-breadcrumb" aria-label="Breadcrumb">
      <ol class="asdf-breadcrumb-list">
        <li
          class="asdf-breadcrumb-item"
          *ngFor="let crumb of breadcrumbs; let last = last"
        >
          <ng-container *ngIf="!last; else lastCrumb">
            <a [href]="crumb.link" class="asdf-breadcrumb-link">{{
              crumb.label
            }}</a>
            <span class="asdf-breadcrumb-separator">›</span>
          </ng-container>
          <ng-template #lastCrumb>
            <span class="asdf-breadcrumb-current">{{ crumb.label }}</span>
          </ng-template>
        </li>
      </ol>
    </nav>
  `,
  styleUrls: ["./breadcrumb.component.css"],
})
export class BreadcrumbComponent {
  @Input() breadcrumbs: { label: string; link: string }[] = [];
}
