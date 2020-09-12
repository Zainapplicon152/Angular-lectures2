import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./user/login/login.component";
import {SignupComponent} from "./user/signup/signup.component";


const routes: Routes = [

  {
    path: 'user', children:
      [
        {path: 'login', component: LoginComponent},
        {path: 'signup', component: SignupComponent},
      ]
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
