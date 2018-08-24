import { Injectable } from '@angular/core';
import { Example } from './example.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ExampleService {
  examples: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
  this.examples = database.list('examples');
  }

  getExamples() {
    return this.examples;
  }

  // getMathematics() {
  //
  // }
  //
  // getScience(){
  //
  // }
  //
  // getPeople(){
  //
  // }
  //
  // getLife(){
  //
  // }
  // addExample(newExample: Example) {
  //   this.examples.push(newExample);
  // }
  //
  // getExampleById(albumId: string){
  // return this.database.object('/examples/' + albumId);
  // }
  //
  // updateExample(localUpdatedExample){
  //   var albumEntryInFirebase = this.getExampleById(localUpdatedExample.$key);
  //   albumEntryInFirebase.update({title: localUpdatedExample.title, artist: localUpdatedExample.artist, description: localUpdatedExample.description});
  // }
  //
  // deleteExample(localExampleToDelete){
  //   var albumEntryInFirebase = this.getExampleById(localExampleToDelete.$key);
  //   albumEntryInFirebase.remove();
  // }
}
