import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BmiService } from '../bmi.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss'],
  providers: [BmiService]
})
export class Lesson1Component implements OnInit {
  tw = 1;
  @Output() twMoneyChange: EventEmitter<number> = new EventEmitter<number>(); // 打出去

  constructor(
    public bmiService: BmiService  // DI
  ) { }

  ngOnInit() {
  }

  moneyChange(money: number) {
    this.twMoneyChange.emit(money);
  }

  callService() {
    this.bmiService.sayHello();
  }

  changeService() {
    this.bmiService.name = 'ssss';
  }
}
