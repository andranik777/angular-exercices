import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  counter:number = 0;
  timer:any
  
  startTimer() {
    this.timer =setInterval(()=>{
      this.counter +=1
    },1000)
  }
  
  endTimer(){
    window.clearInterval(this.timer)
  }
 

  constructor() { }

  ngOnInit(): void {
     
  }

}
