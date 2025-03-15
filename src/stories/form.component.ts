import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { ButtonComponent } from "./button.component";
import { InputComponent } from "./input.component";

@Component({
  selector: "asdf-form",
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent, InputComponent],
  template: `
    <asdf-card
      [container]="useContainer"
      title="Form Title"
      [showTitle]="true"
      [showSubtitle]="false"
      [showPlaceholder]="false"
    >
      <!-- Place your form fields inside the container -->
      <form class="form-stack" (submit)="onSubmit($event)">
        <div class="form-group">
          <label for="name">Name</label>
          <!-- <input id="name" type="text" class="form-control" name="name" /> -->
          <asdf-input
            id="name"
            type="text"
            [(value)]="formData.name"
            style="width: 40vw"
          ></asdf-input>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <!-- <input id="email" type="email" class="form-control" name="email" /> -->
          <asdf-input
            id="email"
            type="email"
            [(value)]="formData.email"
            style="width: 40vw"
          ></asdf-input>
        </div>

        <div class="button-group">
          <asdf-button label="Cancel" [tertiary]="true"></asdf-button>
          <asdf-button label="Confirm" [primary]="true"></asdf-button>
        </div>
      </form>
    </asdf-card>
  `,
  styleUrls: ["./form.css"],
})
export class FormComponent {
  @Input() useContainer: boolean = true;

  formData = {
    name: "",
    email: "",
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.formData); // Handle form submission logic here
  }
}
