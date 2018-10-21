import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  // {
  //   path: Paths.Root, component: RootComponent, children: [
  //     {path: Paths.Root, pathMatch: 'full', component: LandingComponent},
  //     {path: Paths.Trainers, loadChildren: './trainers/trainers.module#TrainersModule'},
  //     {path: Paths.Teams, loadChildren: './teams/teams.module#TeamsModule'},
  //     {path: Paths.Settings, loadChildren: './settings/settings.module#SettingsModule'},
  //     {path: Paths.Account, loadChildren: './account/account.module#AccountModule'}
  //   ]
  // },
  // {path: Paths.SignUp, loadChildren: './signup/signup.module#SignupModule'},
  // {path: Paths.EmailVerify, loadChildren: './email-verify/email-verify.module#EmailVerifyModule'},
  // {path: Paths.ConfirmRegistration, loadChildren: './confirm-register/confirm-register.module#ConfirmRegisterModule'},
  // {path: Paths.Login, loadChildren: './login/login.module#LoginModule'},
  // {path: '**', redirectTo: Paths.Root}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
