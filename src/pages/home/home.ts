import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  text = "";
  constructor(public navCtrl: NavController) {}

  // onChangeText() {
  //   this.text = "Changed!";
  // }
  saveAdd() {
    this.text = "Add button click";
    alert(this.text);
    console.log("Add");
  }

  clear() {
    this.text = "Clear button click";
    alert(this.text);
    console.log("Clear");
  }
}
