import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeSectionComponent } from "./shared-components/home-section/home-section.component";
import { NavbarComponent } from "./shared-components/navbar/navbar.component";
import { BreedsComponent } from "./breeds/breeds.component";
import { MatTooltipModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TitleComponent } from "./shared-components/title/title.component";
import { FooterComponent } from "./shared-components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeSectionComponent,
    NavbarComponent,
    BreedsComponent,
    TitleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
