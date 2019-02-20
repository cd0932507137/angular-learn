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

  constructor() { }

  ngOnInit() {
  }

  getUser() {
    return "Hi Hi " + this.name;
  }

}
