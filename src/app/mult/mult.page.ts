import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.page.html',
  styleUrls: ['./mult.page.scss'],
})
export class MultPage implements OnInit {

  constructor() { }
  firstNumber: any;
  secondNumber: any;
  result: any;
  ngOnInit() {
  }
  mult(){
    this.result=parseInt(this.firstNumber) * parseInt(this.secondNumber);
  }

}
