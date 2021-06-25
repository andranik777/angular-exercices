import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss']
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  var1:string = "J'aime les fruits au sirop"

  myFunc(newString:string) {
    return this.var1 = newString
  }

}
