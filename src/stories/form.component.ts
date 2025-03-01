import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { ButtonComponent } from "./button.component"; // Adjust the import path to your card component

@Component({
  selector: "asdf-form",
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent], // Import CardComponent for use
  template: `
    <asdf-card
      [container]="true"
      title="Form Title"
      [showTitle]="true"
      [showSubtitle]="false"
      [showPlaceholder]="false"
    >
      <!-- Place your form fields inside the container -->
      <form class="form-stack" (submit)="onSubmit($event)">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" class="form-control" name="name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" class="form-control" name="email" />
        </div>
        <!-- 
        <asdf-button>Cancel </asdf-button>

        <asdf-button type="submit" class="asdf-button asdf-button--secondary">
          Submit
        </asdf-button> -->
      </form>
    </asdf-card>
  `,
  styleUrls: ["./form.css"],
})
export class FormComponent {
  formData = {
    name: "",
    email: "",
  };

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.formData); // Handle form submission logic here
  }
}
