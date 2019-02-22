import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Tim";
  public text = "Hello World";
  public siteUrl = window.location.href;

  //Property Binding
  public myId = "testId";
  public isDisabled = false;

  public greeting = "";

  //Two-way Binding
  public twoWay = "";

  //ng-if
  public display = false;

  //ngSwitch
  public color = "red";

  //ngFor
  public phoneName = ['Apple', 'LG', 'Samsung', 'Google'];

  constructor() { }

  ngOnInit() {
  }

  getUser() {
    return "Hi Hi " + this.name;
  }

  //Event Binding
  onClick() {
    console.log('tag123');
    this.greeting = "Hello Josh!!~~"
  }

  //Template Reference Variables
  logMsg(value) {
    console.log(value);
  }
}
