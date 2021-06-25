import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-calcul-string',
  templateUrl: './calcul-string.component.html',
  styleUrls: ['./calcul-string.component.scss']
})
export class CalculStringComponent implements OnInit {
  rep:any
  result:number = 0

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
        this.rep = params
        console.log(params)
    })
  }

  myFunc(str:string,action:string) {
    let arr = str.match(/[0-9]/g)
    let arrInt = arr?.map(x=>parseInt(x))

    if(action=="additionner"){
      arrInt?.forEach(x=>this.result +=x)
      return this.result
    }
    if(action=="soustraire"){
      arrInt?.forEach(x=>this.result -=x)
      return this.result
    }

    if(action=="mutiplier"){
      this.result = 1
      arrInt?.forEach(x=>this.result *=x)
      return this.result
    }
    if(action=="diviser"){
      this.result = 1
      arrInt?.forEach(x=>this.result /=x)
      return this.result
    }
    return this.result
  }

}
