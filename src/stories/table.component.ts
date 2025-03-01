import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";

@Component({
  selector: "asdf-table",
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <asdf-card
      [container]="true"
      [title]="title"
      [subtitle]="subtitle"
      [showTitle]="showTitle"
      [showSubtitle]="showSubtitle"
    >
      <table class="asdf-table">
        <thead>
          <tr>
            <th *ngFor="let header of headers">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let row of data">
            <td *ngFor="let cell of row">{{ cell }}</td>
          </tr>
        </tbody>
      </table>
    </asdf-card>
  `,
  styleUrls: ["./table.css"],
})
export class TableComponent {
  /** Table title */
  @Input() title: string = "Table Title";

  /** Table subtitle */
  @Input() subtitle: string = "Table Subtitle";

  /** Show or hide the title */
  @Input() showTitle: boolean = true;

  /** Show or hide the subtitle */
  @Input() showSubtitle: boolean = true;

  /** Array of table headers */
  @Input() headers: string[] = ["Column 1", "Column 2", "Column 3"];

  /** Table data as an array of rows */
  @Input() data: Array<Array<string | number>> = [
    ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
    ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
  ];
}
