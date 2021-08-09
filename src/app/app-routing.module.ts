import { VerifyComponent } from './components/verify/verify.component';
import { SelectServiceComponent } from './components/select-service/select-service.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'chooseService', component: SelectServiceComponent
  },
  {
    path: 'verify', component: VerifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
