import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "harbor";

  searchItemPage(searchTerm: string) {
    console.log("searching for " + searchTerm);
    const elements = document.querySelectorAll(
      `[data-search-term*="${searchTerm}"]`
    );
    if (elements.length > 0) {
      elements[0].scrollIntoView({ behavior: "smooth", block: "center" });
      elements.forEach((element) => {
        element.classList.add("highlight");
      });
    } else {
      console.log("No element found with the search term: " + searchTerm);
    }
  }
}
