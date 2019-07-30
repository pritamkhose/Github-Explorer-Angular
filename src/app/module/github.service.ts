import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { UserInfo } from './userinfo.model';
import { UserFollow } from './userfollow.model';
import { UserRepos } from './userrepos.model';
import { UserSerach } from './usersearch.model';
import { UserReposSearch } from './userrepossearch.model';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class GithubService {

  username : String = '';
  constructor(private http: HttpClient, private lsService: LocalStorageService) {
    // var v = this.lsService.getUser();
    // console.log(v);
    // if(v != null && v.length > 1){
    //   this.username = v;
    // } else {
    //   this.username = 'pritamkhose';
    // }
  }

  public setUser(username) {
    this.lsService.setUser(username);
  }

  // https://api.github.com/users/pritamkhose
  public getUserInfo(username) {
    return this.http.get<UserInfo>(environment.baseURL + 'users/' + username);
  }

  // https://api.github.com/users/pritamkhose/followers
  public getUserFollowers(username) {
    return this.http.get<UserFollow[]>(environment.baseURL + 'users/' + username + '/followers?per_page=100');
  }

  // https://api.github.com/users/pritamkhose/following
  public getUserFollowing(username) {
    return this.http.get<UserFollow[]>(environment.baseURL + 'users/' + username + '/following?per_page=100');
  }

  // https://developer.github.com/v3/repos/
  //https://api.github.com/users/pritamkhose/repos?sort=updated&per_page=25
  public getUserRepos(username, sort, per_page, desc) {
    return this.http.get<UserRepos[]>(environment.baseURL + 'users/' + username + '/repos?sort=' + sort + '&per_page=' + per_page + '&direction='+ desc);
  }

  //https://api.github.com/users/pritamkhose/starred
  public getUserStarred(username, sort, per_page , desc) {
    return this.http.get<UserRepos[]>(environment.baseURL + 'users/' + username + '/starred?sort=' + sort + '&per_page=' + per_page + '&direction='+ desc);
  }

  // https://api.github.com/search/users?q=pritamkhose&page=1
  public getUserSearch(username, pageno) {
    return this.http.get<UserSerach>(environment.baseURL + 'search/users?q=' + username + '&page=' + pageno);
  }

  // https://api.github.com/search/repositories?q=topic:android
  public getUserReposSearch(topic) {
    return this.http.get<UserReposSearch>(environment.baseURL + 'search/repositories/q=' + topic);
  }

}