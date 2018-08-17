import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-background',
  templateUrl: './change-background.component.html',
  styleUrls: ['./change-background.component.css']
})
export class ChangeBackgroundComponent {
  @Output() clickYellow = new EventEmitter();
  @Output() clickWhite = new EventEmitter();

  yellowButtonClicked(){
     this.clickYellow.emit("yellow");
  }
  whiteButtonClicked(){
    this.clickWhite.emit("white");
  }
}
