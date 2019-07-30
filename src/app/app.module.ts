import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { ProfileComponent } from './module/profile/profile.component';
import { RepositoriesComponent } from './module/repositories/repositories.component';
import { StarsComponent } from './module/stars/stars.component';
import { FollowingComponent } from './module/following/following.component';
import { FollowersComponent } from './module/followers/followers.component';

import { GithubService } from './module/github.service';
import { LocalStorageService } from './module/local-storage.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, MaterialModule, FlexLayoutModule,
    BrowserAnimationsModule, HttpClientModule, MDBBootstrapModule.forRoot(),],
  declarations: [ AppComponent, HomeComponent, ProfileComponent, RepositoriesComponent, StarsComponent, FollowingComponent, FollowersComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GithubService, LocalStorageService]
})
export class AppModule { }
