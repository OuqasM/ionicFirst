import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  firstNumber: any;
  secondNumber: any;
  result: any;
  constructor() { }

  ngOnInit() {
  }
  add(){
    this.result=parseInt(this.firstNumber) + parseInt(this.secondNumber);
  }

}
