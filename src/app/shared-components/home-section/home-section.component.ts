import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-section",
  templateUrl: "./home-section.component.html",
  styleUrls: ["./home-section.component.scss"],
})
export class HomeSectionComponent implements OnInit {
  imageSource: string = "/assets/imgs/bg.jpg";

  constructor() {}

  ngOnInit() {}
}
