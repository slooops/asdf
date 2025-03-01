import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 style="font-family: 'inter';">Welcome!</h1>
    <h4>Wrong page</h4>

    <p>Here's where you really want to be:</p>

    <p>To Actually Run the Storybook run:</p>
    <p>ng run angular-latest:storybook</p>
    <p>
      {{ storybookCommand }}
    </p>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = "angular-latest";
  storybookCommand = "This should open http://localhost:6006/";
}
