import { Component, OnInit } from '@angular/core';
import { Example } from '../example.model';
import { Router } from '@angular/router';
import { ExampleService } from '../example.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css'],
  providers: [ExampleService]
})
export class ExamplesComponent implements OnInit {
  examples: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private exampleService: ExampleService){}

  ngOnInit(){
    this.examples = this.exampleService.getExamples();
    // this.mathematics = this.exampleService.getMathematics();
    // this.science = this.exampleService.getScience();
    // this.people = this.exampleService.getPeople();
    // this.life = this.exampleService.getLife();
  }

  goToDetailPage(clickedExample) {
    this.router.navigate(['examples', clickedExample.$key]);
  };
}
