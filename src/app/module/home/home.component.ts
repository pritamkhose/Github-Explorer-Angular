import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GithubService } from '../github.service';
import { UserSearch } from '../usersearch.model';
import { UserReposSearch, Item } from '../userrepossearch.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  isLoading = 'Loading ...';
  aList: any;
  aTotalCountItems: any;
  pageno = 1;
  aTotalCount = 0;
  searchvalue = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private aService: GithubService) { }

  ngOnInit() {
  }

  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
    if (value != null && value.length > 1) {
      this.searchvalue = value;
      // console.log(value);
    } else {
      this.searchvalue = '';
    }
  }

  callSearch(value) {
    if (value.length > 1) {
      this.callWeb()
    }
  }

  showCard(aObj) {
    // this.aService.setUser(aObj.login);
    this.router.navigate(['profile/', aObj.login]);
  }

  pagination(aNo) {
    this.pageno = aNo;
    this.callWeb();
  }

  callWeb() {
    this.aList = [];
    this.aService.getUserSearch(this.searchvalue, this.pageno)
      .subscribe((data: UserSearch) => {
        this.aTotalCount = data.total_count;
        var a = (this.aTotalCount / 30);
        if (a > (Math.round(a / 30))) {
          this.aTotalCount = Math.round(this.aTotalCount / 30) + 1;
        }
        this.aTotalCountItems = [];
        if (this.aTotalCount > 34) {
          this.aTotalCount = 34;
        }
        for (let i = 1; i < this.aTotalCount + 1; i++) {
          this.aTotalCountItems.push(i);
        }
        this.aList = data.items;
      }, error => {
        this.isLoading = 'Not Found';
        console.log('oops', error);
      }
      );
  }

}