import { Component, OnInit, Inject } from "@angular/core";
import { Breeds } from "../models/breeds/breeds";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.scss"],
})
export class BreedsComponent implements OnInit {
  breeds: Breeds[] = [];
  selectedBreed: Breeds | null = null;
  showModal: boolean = false;

  title: string;
  description: string;
  pincture: string;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.breeds = Breeds.getBreeds();
  }

  onBreedClick(breedId: number) {
    const breed = Breeds.getBreedById(breedId);
    if (breed) {
      const container = this.document.querySelector(
        ".containerSelectBreeds"
      ) as HTMLElement;
      const baseElement = this.document.querySelector("base");
      const baseHref = baseElement
        ? baseElement.getAttribute("href") || ""
        : "";

      container.style.backgroundImage = `
        url("${baseHref}assets/svgs/corner-small-left-top.svg"),
        url("${baseHref}assets/svgs/corner-small-right-top.svg"),
        url("${baseHref}assets/svgs/corner-small-left-bottom.svg"),
        url("${baseHref}assets/svgs/corner-small-right-bottom.svg"),
        url("${baseHref}assets/imgs/breeds/${breed.image}")
      `;
      container.style.backgroundPosition =
        "top left, top right, bottom left, bottom right, center";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "auto, auto, auto, auto, cover";
    }

    this.selectedBreed = Breeds.getBreedById(breedId) || null;
  }

  closeInfoBreed() {
    const container = this.document.querySelector(
      ".containerSelectBreeds"
    ) as HTMLElement;

    container.style.backgroundImage = "";

    this.selectedBreed = null;
  }

  openModal() {
    const breed = Breeds.getBreedById(this.selectedBreed.id || 0);
    if (breed) {
      this.title = breed.nameCity;
      this.description = breed.cityDescription;
      this.pincture = "assets/imgs/breeds/citys/" + breed.cityImage;
      this.showModal = true;
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
