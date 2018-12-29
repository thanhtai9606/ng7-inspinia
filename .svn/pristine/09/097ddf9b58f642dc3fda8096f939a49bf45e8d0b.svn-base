import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private router: Router) { }
  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();
  }

  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
  ngOnInit() {
  }

}
