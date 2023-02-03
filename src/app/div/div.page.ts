import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-div',
  templateUrl: './div.page.html',
  styleUrls: ['./div.page.scss'],
})
export class DivPage implements OnInit {

  constructor() { }
  firstNumber: any;
  secondNumber: any;
  result: any;
  ngOnInit() {
  }
  div(){
    this.result=parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
}
