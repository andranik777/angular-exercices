import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit {

  timer:number = 0;

  increment1() {
    this.timer +=1 
  }
  increment5() {
    this.timer +=5
  }

  decrement1(){
    this.timer -=1

  }
  decrement5(){
    this.timer -=5
  }

  myStyle:object={color:'red'}


  constructor() { }

  ngOnInit(): void {
  }


  
}
