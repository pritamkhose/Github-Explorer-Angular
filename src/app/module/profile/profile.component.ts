import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '../github.service';
import { UserInfo } from '../userinfo.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name = null;
  aUserInfo: UserInfo;
  isLoading = 'Loading ...';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private aService: GithubService) { }

  ngOnInit() {
    //this.router.events.subscribe((val) => {
    this.activatedRoute.url.subscribe(queryParams => {
      if (this.activatedRoute.snapshot.url.length === 2) {
        this.name = this.activatedRoute.snapshot.url[1].path;
        this.callWeb();
      } else if (this.name === null) {
        this.router.navigate(['profile/', 'pritamkhose']);
      }
    });
  }

  callWeb() {
    this.aService.getUserInfo(this.name)
      .subscribe((data: UserInfo) => {
        this.aUserInfo = data;
      }, error => {
        this.isLoading = 'Not Found';
        console.log('oops', error);
      }
      );
  }
}
