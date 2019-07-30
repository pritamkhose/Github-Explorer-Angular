import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'pritamkhose';


  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((val) => {
      if (this.activatedRoute.snapshot.url.length === 2) {
        this.name = this.activatedRoute.snapshot.url[1].path;
        // console.log(this.name);
      }
      if (location.path() != '') {
        // console.log(location.path());
      } else {
       // console.log(this.router.url);
      }
    });
  }

  ngOnInit() {


  }

  isActive = function (viewLocation) {
    console.log(viewLocation + ' - ' + this.router.url);
    return viewLocation === this.router.url;
  };
}
