import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'vendors/node_modules/ngx-toastr';
@Component({
  selector: 'app-dash-view1',
  templateUrl: './dash-view1.component.html',
  styleUrls: ['./dash-view1.component.css']
})
export class DashView1Component implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    setTimeout(() => this.showSuccess());
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
