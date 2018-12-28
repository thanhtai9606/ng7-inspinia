import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  ngAfterViewInit() {
    $('body').addClass('gray-bg');    
    $('.theme-config').remove();
  }

  ngOnDestroy() {
    $('body').removeClass('gray-bg');
  }

}
