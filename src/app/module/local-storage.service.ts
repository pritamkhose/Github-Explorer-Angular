import { Injectable } from '@angular/core';
import { LocalStorage, SharedStorage } from 'ngx-store';

@Injectable()
export class LocalStorageService {

  @LocalStorage() aList = new Object();
  @LocalStorage() user_name: String = null;

  constructor() {
  }

  public clearAll() {
    this.aList = [];
    this.user_name = null;
  }

  public getUser() {
    return this.user_name;
  }

  public setUser(user: String) {
    this.user_name = user;
  }

  public getSaveList() {
    return this.aList;
  }

  public setSaveList(aList: Object) {
    this.aList= aList;
  }

  public clearSaveList() {
    this.aList = [];
  }

}