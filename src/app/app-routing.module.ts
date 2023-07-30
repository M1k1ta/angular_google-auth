import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ContentComponent } from './components/content/content.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  { path: 'registration', title: 'Registration', component: RegistrationComponent, canActivate: [HomeGuard] },
  { path: 'login', title: 'Login', component: LoginComponent, canActivate: [HomeGuard] },
  { path: 'room', title: 'Room', component: ContentComponent, canActivate: [AuthGuard] },
  { path: 'room/:roomId', title: 'Room', component: ContentComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/room', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
