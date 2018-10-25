import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileRoutingModule} from './mobile-routing.module';
import {MobileLandingComponent} from './mobile-landing/mobile-landing.component';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  declarations: [MobileLandingComponent]
})
export class MobileModule {
}
