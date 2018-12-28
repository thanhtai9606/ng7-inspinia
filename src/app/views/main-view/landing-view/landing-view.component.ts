import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import $ from 'jquery';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit, OnDestroy  {

  // keep refs to subscription to be abble to unsubscribe later
  // (NOTE: unless you want to be notified when an item is revealed by WOW,
  //  you absolutely don't need this line and related, for the library to work
  // only the call to `this.wowService.init()` at some point is necessary
  private wowSubscription: Subscription;
 
  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init(); 
    });
  
  }
  // constructor(){}

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
       this.myLoad();
       this.cbpAnimatedHeader();
       $('body').addClass('landing-page');
      });
   
  }
  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
   this.wowSubscription.unsubscribe();
  }
   myLoad = ()=> {
    // Page scrolling feature
    $('a.page-scroll').bind('click', function (event) {
      var link = $(this);
      $('html, body').stop().animate({
        scrollTop: $(link.attr('href')).offset().top - 50
      }, 500);
      event.preventDefault();
      if ($('body').hasClass('body-small')) {
        $('#navbar').collapse('toggle');
      }
    });
  }
  cbpAnimatedHeader =() =>{
    var docElem = document.documentElement,
      header = document.querySelector('.navbar-default'),
      didScroll = false,
      changeHeaderOn = 200;
    function init() {
      window.addEventListener('scroll', function (event) {
        if (!didScroll) {
          didScroll = true;
          setTimeout(scrollPage, 250);
        }
      }, false);
    }
    function scrollPage() {
      var sy = scrollY();
      if (sy >= changeHeaderOn) {
        $(header).addClass('navbar-scroll')
      }
      else {
        $(header).removeClass('navbar-scroll')
      }
      didScroll = false;
    }
    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
    init();
  }
   
}
