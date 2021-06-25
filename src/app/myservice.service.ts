import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  private _testVariable:string = "ma test variable"


  constructor() { }

  get testVariable(): string {
    return this._testVariable
  }
  
  
  
}

