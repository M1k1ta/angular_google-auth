import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ContentComponent } from './components/content/content.component';
import { AuthGuard } from './auth.guard';
import { HomeGuard } from './home.guard';

const routes: Routes = [
  { path: 'registration', title: 'Registration', component: RegistrationComponent, canActivate: [HomeGuard] },
  { path: 'login', title: 'Login', component: LoginComponent, canActivate: [HomeGuard] },
  { path: 'home', title: 'Home', component: ContentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
