import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {
scores = ['10分' , '20分' , '30分' , '40分' , '50分' , '60分' , '70分' , '80分']
  constructor() { }

  ngOnInit() {
  }

}
