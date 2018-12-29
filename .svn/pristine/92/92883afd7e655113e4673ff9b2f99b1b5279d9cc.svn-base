import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationModule } from '../navigation/navigation.module';
import { TopnavbarModule } from '../topnavbar/topnavbar.module';
import { FooterModule } from '../footer/footer.module';
import { RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { BlankComponent } from './blank/blank.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [BasicComponent,BlankComponent],
  imports: [
    CommonModule,
    BrowserModule,
    NavigationModule,
    TopnavbarModule,
    FooterModule,
    RouterModule
  ],
  exports:[BasicComponent,BlankComponent]
})
export class LayoutsModule { }
