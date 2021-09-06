import { VerifyComponent } from './components/verify/verify.component';
import { SelectServiceComponent } from './components/select-service/select-service.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ServiceProviderComponent } from './components/service-provider/service-provider.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { RegisterServiceProviderComponent } from './components/register-service-provider/register-service-provider.component';
import { MapComponent } from './components/map/map.component';


const routes: Routes = [
  {
    path: '/',
    component: HomeComponent,
  },

  {
    path: 'home/:id',
    component: HomeComponent,
  },
  {
    path: 'chooseService',
    component: SelectServiceComponent,
  },
  {
    path: 'verify',
    component: VerifyComponent,
  },
  {
    path: 'register',
    component: RegisterServiceProviderComponent,
  },
  {
    path: 'register/:username',
    component: RegisterServiceProviderComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'login/:username',
    component: LoginComponent,
  },
 
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'serviceProvider/:username',
    component: ServiceProviderComponent,
  },
  {
    path: 'forgotPassword/:username',
    component: ForgotPasswordComponent,
  },
  {
    path: 'registerUser',
    component: RegisterUserComponent,
  },
  {
    path: 'activities/:userID',
    component: ActivitiesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
