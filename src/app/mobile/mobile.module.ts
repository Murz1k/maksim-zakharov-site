import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileRoutingModule} from './mobile-routing.module';
import {MobileLandingComponent} from './mobile-landing/mobile-landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MobileLandingComponent]
})
export class MobileModule {
}
