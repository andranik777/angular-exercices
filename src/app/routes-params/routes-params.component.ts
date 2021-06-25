import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routes-params',
  templateUrl: './routes-params.component.html',
  styleUrls: ['./routes-params.component.scss']
})
export class RoutesParamsComponent implements OnInit {
  var1:any

  constructor(private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.var1 = params.elo
      
    })
    }


}
