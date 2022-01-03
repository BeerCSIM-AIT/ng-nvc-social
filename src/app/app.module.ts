import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { FeedComponent } from './components/pages/feed/feed.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { ManageuserComponent } from './components/pages/admin/manageuser/manageuser.component';
import { ManagepostComponent } from './components/pages/admin/managepost/managepost.component';
import { ChangepasswordComponent } from './components/pages/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FeedComponent,
    ProfileComponent,
    HomeComponent,
    DashboardComponent,
    ManageuserComponent,
    ManagepostComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
