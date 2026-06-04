import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "asdf-skeleton",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="asdf-skeleton"
      [ngClass]="{
        'asdf-skeleton--circle': variant === 'circle',
        'asdf-skeleton--text': variant === 'text',
        'asdf-skeleton--rect': variant === 'rect'
      }"
      [ngStyle]="{
        width: variant === 'circle' ? height : width,
        height: height
      }"
    ></div>
  `,
  styleUrls: ["./skeleton.component.css"],
})
export class SkeletonComponent {
  @Input() variant: "text" | "rect" | "circle" = "text";
  @Input() width: string = "100%";
  @Input() height: string = "16px";
}
