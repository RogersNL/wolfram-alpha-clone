import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  backgroundColor: string = 'yellow-bg';
  bgColor(clickedColor){
    if(clickedColor === "yellow"){
      alert("yellow");
      return "yellow-bg";
    } else if(clickedColor === "white"){
      alert("white");
      return "white-bg";
    } else {
      return "";
    }
  }

}
