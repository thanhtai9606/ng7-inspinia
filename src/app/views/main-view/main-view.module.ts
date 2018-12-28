import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainViewComponent } from './main-view.component';
import { DashView1Component } from '../dash-view1/dash-view1.component';
import { DashView2Component } from '../dash-view2/dash-view2.component';

@NgModule({
  declarations: [
    MainViewComponent,
    DashView1Component,
    DashView2Component
  ],
  imports: [
    CommonModule
  ],
  exports:[
  MainViewComponent,
  DashView1Component,
  DashView2Component]
})
export class MainViewModule { }
