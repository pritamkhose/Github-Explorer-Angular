import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';

import { ProfileComponent } from './module/profile/profile.component';
import { RepositoriesComponent } from './module/repositories/repositories.component';
import { StarsComponent } from './module/stars/stars.component';
import { FollowingComponent } from './module/following/following.component';
import { FollowersComponent } from './module/followers/followers.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //{ path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'repositories', component: RepositoriesComponent },

  { path: 'profile/:id', component: ProfileComponent },
  { path: 'repositories/:id', component: RepositoriesComponent },
  { path: 'stars/:id', component: StarsComponent },
  { path: 'following/:id', component: FollowingComponent },
  { path: 'followers/:id', component: FollowersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
