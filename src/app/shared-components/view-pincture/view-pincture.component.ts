import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-view-pincture",
  templateUrl: "./view-pincture.component.html",
  styleUrls: ["./view-pincture.component.scss"],
})
export class ViewPinctureComponent implements OnInit {
  @Output() alterModal = new EventEmitter();

  @Input() pincture: string = "";
  @Input() title: string = "";
  @Input() description: string = "";

  constructor() {}

  ngOnInit() {}

  closeModal() {
    this.alterModal.emit();
  }
}
