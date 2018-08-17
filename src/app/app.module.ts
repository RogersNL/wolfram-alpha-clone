import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPanelComponent } from './main-panel/main-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    TopBarComponent,
    FooterComponent,
    MainPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
