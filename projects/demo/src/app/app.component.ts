import { Component } from "@angular/core";
import taggy, { TaggyComponent, TaggyModule, TaggyService } from "taggy";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "taggy angular";

  constructor(public taggy: TaggyService) {
    console.log("instanciated");
    console.log(taggy);
  }
}
