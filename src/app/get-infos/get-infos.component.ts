import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-get-infos",
  templateUrl: "./get-infos.component.html",
  styleUrls: ["./get-infos.component.scss"],
})
export class GetInfosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  downloadPDF() {
    const link = document.createElement("a");
    link.href = "assets/pdfs/ficha.pdf";
    link.download = "ficha.pdf";
    link.click();
  }
}
