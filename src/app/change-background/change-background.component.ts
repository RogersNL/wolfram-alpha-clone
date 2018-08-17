import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.css']
})
export class ChangeBackgroundComponent {
  @Output() clickColor = new EventEmitter();

  yellowButtonClicked(){
    this.clickColor.emit("yellow");
  }
  whiteButtonClicked(){
    this.clickColor.emit("white");
  }
}
