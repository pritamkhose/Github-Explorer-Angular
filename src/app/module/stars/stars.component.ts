import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '../github.service';
import { UserRepos } from '../userrepos.model';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  name = '';
  aList: UserRepos[];
  isStyleGrid = true;
  perpage = 30;
  sort = 'updated';
  desc = 'desc';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private aService: GithubService) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(queryParams => {
      this.aList = null;
      if (this.activatedRoute.snapshot.url.length === 2) {
        this.name = this.activatedRoute.snapshot.url[1].path;
      } else {
        this.name = 'pritamkhose';
      }
      this.callWeb();
    });
  }

  callWeb() {
    this.aService.getUserStarred(this.name, this.sort, this.perpage, this.desc)
      .subscribe((data: UserRepos[]) => {
        this.aList = data;
      }, error => { console.log('oops', error) });
  }

  onChange(deviceValue) {
    this.callWeb();
  }

  showCard(aObj) {
    window.open(aObj.html_url, "_blank");
    // this.router.navigate(['repositories/', aObj.url]);
  }

  showCardUser(aObj) {
    this.router.navigate(['profile/', aObj.owner.login]);
  }

  toggleView() {
    this.isStyleGrid = !this.isStyleGrid;
  }

  toggleOrder() {
    if (this.desc === 'asc') {
      this.desc = 'desc';
    } else {
      this.desc = 'asc';
    }
    this.callWeb();
  }

}