import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayPlusMoinComponent } from './array-plus-moin/array-plus-moin.component';
import { CalculStringComponent } from './calcul-string/calcul-string.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { CompteurComponent } from './compteur/compteur.component';
import { CounterComponent } from './counter/counter.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { LienRegionComponent } from './lien-region/lien-region.component';
import { OperationsParamsComponent } from './operations-params/operations-params.component';
import { RegionComponentComponent } from './region-component/region-component.component';
import { RoutesParamsComponent } from './routes-params/routes-params.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path: 'first-component',  component: FirstComponentComponent },
  { path: 'second-component',  component: SecondComponentComponent },
  { path: 'exo-if',  component: Component3Component },
  { path: 'number-count',  component: Component4Component },
  { path: 'timer-plus',  component: TimerComponent },
  { path: 'counter-plus',  component: CounterComponent },
  { path: 'route-params/:elo',  component: RoutesParamsComponent },
  { path: 'array-plus-moin',  component:  ArrayPlusMoinComponent },
  { path: 'compteur',  component:  CompteurComponent },
  { path: 'calcul-string/:val1/:val2',  component:  CalculStringComponent },
  { path: 'region/:p1',  component:  RegionComponentComponent },
  { path: 'lien-region',  component:  LienRegionComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
