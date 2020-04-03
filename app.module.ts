import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';

import { routing } from './app.routing';

import { GitHubUserComponent } from './githubuser.component';
import { LoginService } from './login.service';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    LoginService,
    AuthGuard,
    PreventUnsavedChangesGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
