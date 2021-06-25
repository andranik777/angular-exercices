import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.scss']
})
export class Component4Component implements OnInit {

  nb1:number = 53841596248;
  arr:string[] =[];
  rand:string = "";
  compteur:number =0;


  randomNumber  = function() {
    return Math.floor(Math.random() * 9.9).toString()

  }

  constructor() { }

  ngOnInit(): void {
  }

  myFunc () {
    this.compteur =0
    this.arr = this.nb1.toString().split("")
    this.arr.forEach(element=> {

      this.rand = this.randomNumber()
      while(element != this.rand ){
        this.rand = this.randomNumber()
        this.compteur ++
      }
    })
    return this.compteur
  }

}
