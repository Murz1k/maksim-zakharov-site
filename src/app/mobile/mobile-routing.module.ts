import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MobileLandingComponent} from './mobile-landing/mobile-landing.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: MobileLandingComponent}
  // {path: 'projects', component: ProjectsComponent},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MobileRoutingModule {
}
