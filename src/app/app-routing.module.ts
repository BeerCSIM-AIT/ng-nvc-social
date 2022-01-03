import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { ManagepostComponent } from './components/pages/admin/managepost/managepost.component';
import { ManageuserComponent } from './components/pages/admin/manageuser/manageuser.component';
import { ChangepasswordComponent } from './components/pages/changepassword/changepassword.component';
import { FeedComponent } from './components/pages/feed/feed.component';
import { FriendComponent } from './components/pages/friend/friend.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterComponent } from './components/pages/register/register.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },  
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "feed", component: FeedComponent },
  { path: "friend", component: FriendComponent },
  { path: "changepassword", component: ChangepasswordComponent },
  { path: "admin/dashboard", component: DashboardComponent },
  { path: "admin/managepost", component: ManagepostComponent },
  { path: "admin/manageuser", component: ManageuserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
