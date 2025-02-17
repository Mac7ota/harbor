import { Component, OnInit } from "@angular/core";
import { Breeds } from "../models/breeds/breeds";

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.scss"],
})
export class BreedsComponent implements OnInit {
  breeds: Breeds[] = [];
  selectedBreed: Breeds | null = null;

  constructor() {}

  ngOnInit() {
    this.breeds = Breeds.getBreeds();
  }

  onBreedClick(breedId: number) {
    const breed = Breeds.getBreedById(breedId);
    if (breed) {
      const container = document.querySelector(
        ".containerSelectBreeds"
      ) as HTMLElement;
      container.style.backgroundImage = `
  url("/assets/svgs/corner-small-left-top.svg"),
  url("/assets/svgs/corner-small-right-top.svg"),
  url("/assets/svgs/corner-small-left-bottom.svg"),
  url("/assets/svgs/corner-small-right-bottom.svg"),
    url("/assets/imgs/breeds/${breed.image}"),
  url("/assets/imgs/breeds/bg${breed.name.toLowerCase()}.png")
`;
      container.style.backgroundPosition =
        "top left, top right, bottom left, bottom right, center, center";
      container.style.backgroundRepeat = "no-repeat";
      container.style.backgroundSize = "auto, auto, auto, auto, cover, cover";
    }

    this.selectedBreed = Breeds.getBreedById(breedId) || null;
  }

  closeInfoBreed() {
    const container = document.querySelector(
      ".containerSelectBreeds"
    ) as HTMLElement;

    container.style.backgroundImage = "";

    this.selectedBreed = null;
  }
}
