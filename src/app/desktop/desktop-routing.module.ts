import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LandingComponent} from './landing/landing.component';
import {ProjectsComponent} from './projects/projects.component';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: LandingComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DesktopRoutingModule {
}
