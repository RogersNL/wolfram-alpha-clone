import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bgColor(clickedColor){
    if(clickedColor === "yellow"){
      return "yellow-bg";
    } else if(clickedColor === "white"){
      return "white-bg";
    } else {
      return "";
    }
  }
}
