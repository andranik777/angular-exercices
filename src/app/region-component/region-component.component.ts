import { Component, OnInit } from '@angular/core';
import { RegionDescriptionService } from '../region-description.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-region-component',
  templateUrl: './region-component.component.html',
  styleUrls: ['./region-component.component.scss']
})
export class RegionComponentComponent implements OnInit {

  rep:any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.testService)
    this.route.params.subscribe((params) => {
      this.rep = params.p1
      console.log(params)
  })
  }

  testService = new RegionDescriptionService

  


  

}
