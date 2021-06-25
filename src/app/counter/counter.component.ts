import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  timer:number = 30;
  counter:any

  startTimer() {
    this.counter = setInterval(()=>{
      this.timer -= 1
      if(this.timer <= 0){
        window.clearInterval(this.counter)
      }
    },1000)
    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
