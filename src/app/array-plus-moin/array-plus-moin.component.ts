import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-plus-moin',
  templateUrl: './array-plus-moin.component.html',
  styleUrls: ['./array-plus-moin.component.scss']
})
export class ArrayPlusMoinComponent implements OnInit {

  arr:string[] = ["elo","dfva","fbka"]

  arrAddElement() {
    this.arr.push("Bonjour Monsieur !")
  }

  arrRemoveElement(){
    this.arr.pop()

  }
  constructor() { }

  ngOnInit(): void {
  }

}
