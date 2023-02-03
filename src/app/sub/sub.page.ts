import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.page.html',
  styleUrls: ['./sub.page.scss'],
})
export class SubPage implements OnInit {

  constructor() { }
  firstNumber: any;
  secondNumber: any;
  result: any;
  ngOnInit() {
  }
  sub(){
    this.result=parseInt(this.firstNumber) - parseInt(this.secondNumber);
  }

}
