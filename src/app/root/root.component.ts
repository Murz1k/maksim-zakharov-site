import {Component, OnInit} from '@angular/core';
import {DeviceDetectorService} from 'ngx-device-detector';
import {Router} from '@angular/router';

@Component({
  selector: 'root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService, private route: Router) {
  }

  ngOnInit(): void {
    let url = this.route.url;
    const path = this.route.url.split('/')[1];
    if (path === 'mobile') {
      url = this.route.url.replace('/mobile', '');
    }

    if (this.deviceService.isDesktop()) {
      this.route.navigate([`${url}`]);
    } else if (this.deviceService.isMobile()) {
      this.route.navigate([`/mobile${url}`]);
    }

    // if (this.deviceService.isDesktop()) {
    //   this.route.navigate(['']);
    // } else if (this.deviceService.isMobile()) {
    //   this.route.navigate(['/mobile']);
    // }
  }
}
