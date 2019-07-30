import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '../github.service';
import { UserFollow } from '../userfollow.model';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  name = '';
  aList: UserFollow[];

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private aService: GithubService) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(queryParams => {
      if (this.activatedRoute.snapshot.url.length === 2) {
        this.name = this.activatedRoute.snapshot.url[1].path;
      }
      this.aList = [];
      this.aService.getUserFollowing(this.name)
        .subscribe((data: UserFollow[]) => {
          this.aList = data;
        }, error => { console.log('oops', error) });
    });
  }

  showCard(aObj) {
    // this.aService.setUser(aObj.login);
    this.router.navigate(['profile/', aObj.login]);
  }

}