import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  downloadArquiv(src: string, type: number) {
    const link = document.createElement("a");
    link.href = src;
    link.download = "arquivo." + (type == 1 ? "png" : "jpg");
    link.click();
  }
}
