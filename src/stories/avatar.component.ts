import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-avatar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="classes" [ngStyle]="backgroundStyle">
      <img
        *ngIf="src; else initialsBlock"
        [src]="src"
        [alt]="name"
        class="asdf-avatar-img"
      />
      <ng-template #initialsBlock>
        <span class="asdf-avatar-initials">{{ initials }}</span>
      </ng-template>
      <span
        *ngIf="status"
        class="asdf-avatar-status"
        [ngClass]="'asdf-avatar-status--' + status"
      ></span>
    </div>
  `,
  styleUrls: ["./avatar.component.css"],
})
export class AvatarComponent {
  @Input() src?: string;
  @Input() name: string = "";
  @Input() size: "small" | "medium" | "large" = "medium";
  @Input() status?: "online" | "offline" | "busy";
  @Input() color?: string;

  get initials(): string {
    return this.name
      .split(" ")
      .map((part) => part.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  get classes(): string[] {
    return ["asdf-avatar", `asdf-avatar--${this.size}`];
  }

  get backgroundStyle(): Record<string, string> {
    if (this.src) return {};
    return { "background-color": this.color || "#049fd9" };
  }
}
