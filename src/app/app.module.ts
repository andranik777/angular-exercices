import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { TimerComponent } from './timer/timer.component';
import { CounterComponent } from './counter/counter.component';
import { RoutesParamsComponent } from './routes-params/routes-params.component';
import { ArrayPlusMoinComponent } from './array-plus-moin/array-plus-moin.component';
import { CompteurComponent } from './compteur/compteur.component';
import { CalculStringComponent } from './calcul-string/calcul-string.component';
import { OperationsParamsComponent } from './operations-params/operations-params.component';
import { RegionComponentComponent } from './region-component/region-component.component';
import { LienRegionComponent } from './lien-region/lien-region.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    Component3Component,
    Component4Component,
    TimerComponent,
    CounterComponent,
    RoutesParamsComponent,
    ArrayPlusMoinComponent,
    CompteurComponent,
    CalculStringComponent,
    OperationsParamsComponent,
    RegionComponentComponent,
    LienRegionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
