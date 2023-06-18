import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { Platform } from '@ionic/angular';
declare var navigator: any;
declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subscription: any;
  constructor(private router: Router, private platform: Platform) {
  }

  ngOnInit() {
  }
  goTo(to: string, id?: number) {
    if (id) {
      this.router.navigate([`${to}/${id}`]).then();
    } else {
      this.router.navigate([`${to}`]).then();
    }
  }
  close(){
    this.platform.ready().then(() => {
      if (navigator.app) {
        navigator.app.exitApp();
      } else if (window.cordova) {
        window.cordova.plugins.exit();
      }
    });
  }
}
