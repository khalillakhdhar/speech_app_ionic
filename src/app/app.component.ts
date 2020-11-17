import { Component, OnInit } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // tslint:disable-next-line: object-literal-sort-keys
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public etat = false;
  public appPages = [
    {
      title: 'Profile',
      url: '/profile',
      icon: 'home',
    },
    {
      title: 'messagerie',
      url: '/chat',
      icon: 'mail',
    },

    {
      title: 'Geolocalisation',
      url: '/suivie',
      // tslint:disable-next-line: object-literal-sort-keys
      icon: 'alert',
    },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public ngOnInit() {
    if (localStorage.length > 0) {
      this.etat = true;
    }
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase(),
      );
    }
  }
  public deco() {
    localStorage.clear();
    window.location.replace('folder');
  }
}
