import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DesktopRoutingModule} from './desktop-routing.module';
import {ProjectsComponent} from './projects/projects.component';
import {LandingComponent} from './landing/landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DesktopRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProjectsComponent,
    LandingComponent
  ]
})
export class DesktopModule {
}
