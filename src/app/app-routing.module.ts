import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RootComponent} from './root/root.component';

const appRoutes: Routes = [
  {
    path: '', component: RootComponent, children: [
      {path: 'mobile', loadChildren: './mobile/mobile.module#MobileModule'},
      {path: '', loadChildren: './desktop/desktop.module#DesktopModule'}
    ]
  },
  {path: '**', redirectTo: ''}
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
