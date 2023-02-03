import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.page.html',
  styleUrls: ['./calcul.page.scss'],
})
export class CalculPage implements OnInit {
  firstNumber: any;
  secondNumber: any;
  result: any;
  
  constructor() {}

  add(){
    this.result=parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }
  sub(){
    this.result=parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }
  mult(){
    this.result=parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }
  div(){
    this.result=parseInt(this.firstNumber) / parseInt(this.secondNumber);
  }
 

  ngOnInit() {
  }

}
