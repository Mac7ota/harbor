import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-get-infos",
  templateUrl: "./get-infos.component.html",
  styleUrls: ["./get-infos.component.scss"],
})
export class GetInfosComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  downloadArquiv(src: string, type: number) {
    const link = document.createElement("a");
    link.href = src;
    link.download = "arquivo." + (type == 1 ? "png" : "jpg");
    link.click();
  }
}
