import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { routing } from './app.routing';


import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { ChangeBackgroundComponent } from './change-background/change-background.component';
import { ExamplesComponent } from './examples/examples.component';
import { ExampleDetailsComponent } from './example-details/example-details.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    TopBarComponent,
    FooterComponent,
    MainPanelComponent,
    ChangeBackgroundComponent,
    ExamplesComponent,
    ExampleDetailsComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
