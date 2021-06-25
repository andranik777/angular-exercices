import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  myString: string = "salut"
 tiroir: string[] = ["elo", "mar", "Tdkz"]
  constructor() { }

  ngOnInit(): void {
  }
  changeF(newString: string): void {
    this.myString = newString
  }

  testService = new MyserviceService



}


