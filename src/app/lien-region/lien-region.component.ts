import { Component, OnInit } from '@angular/core';
import { RegionDescriptionService } from '../region-description.service';

@Component({
  selector: 'app-lien-region',
  templateUrl: './lien-region.component.html',
  styleUrls: ['./lien-region.component.scss']
})
export class LienRegionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.testService.region)
   
  }
  
  testService = new RegionDescriptionService

  
  

}
