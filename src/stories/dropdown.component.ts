import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";

@Component({
  selector: "asdf-dropdown",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="asdf-dropdown" [class.open]="isOpen">
      <button [ngClass]="triggerClasses" (click)="toggleDropdown()">
        {{ selectedLabel || placeholder }}
        <i
          class="asdf-icon asdf-icon-caret-down caret-icon"
          [class.rotated]="isOpen"
          [ngStyle]="{
            filter: style === 'primary' ? 'brightness(0) invert(1)' : 'none'
          }"
        ></i>
      </button>

      <ul class="asdf-dropdown-menu" *ngIf="isOpen">
        <li
          *ngFor="let item of items; let i = index"
          (click)="selectItem(item)"
          [class.selected]="item === selectedItem"
          [attr.tabindex]="0"
          (keydown)="onKeydown($event, i)"
        >
          {{ item.label }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent {
  @Input() items: { label: string; value: any }[] = [];
  @Input() placeholder: string = "Select an option";
  @Output() selectionChange = new EventEmitter<any>();
  @Input() style: "primary" | "secondary" = "primary";

  isOpen = false;
  selectedItem: any = null;
  selectedLabel: string = "";

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectItem(item: { label: string; value: any }) {
    this.selectedItem = item.value;
    this.selectedLabel = item.label;
    this.isOpen = false;
    this.selectionChange.emit(item.value);
  }

  @HostListener("document:click", ["$event"])
  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest(".asdf-dropdown")) {
      this.isOpen = false;
    }
  }

  onKeydown(event: KeyboardEvent, index: number) {
    const listLength = this.items.length;
    const parent = (event.target as HTMLElement).parentElement;

    if (!parent) return;

    if (event.key === "ArrowDown") {
      const nextIndex = (index + 1) % listLength;
      (parent.children[nextIndex] as HTMLElement).focus();
    } else if (event.key === "ArrowUp") {
      const prevIndex = (index - 1 + listLength) % listLength;
      (parent.children[prevIndex] as HTMLElement).focus();
    } else if (event.key === "Enter") {
      this.selectItem(this.items[index]);
    }
  }

  get triggerClasses() {
    return [
      "asdf-dropdown-trigger",
      this.style === "secondary" ? "asdf-dropdown-trigger--secondary" : "",
    ];
  }
}
