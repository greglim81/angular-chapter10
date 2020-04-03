import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubUserComponent } from './githubuser.component';
import { GitHubComponent } from './github.component';

import { LoginComponent } from './login.component';
import { AuthGuard } from './auth-guard.service';

import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';


export const routing = RouterModule.forRoot([
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'GitHub', component: GitHubComponent, canActivate: [AuthGuard]},
  {path: 'GitHub/user/:login/:score', component: GitHubUserComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent}
]);
