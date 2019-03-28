import {
  Component,
  ViewChild
} from '@angular/core';
import {
  Nav,
  Platform
} from 'ionic-angular';
import {
  StatusBar
} from '@ionic-native/status-bar';
import {
  SplashScreen
} from '@ionic-native/splash-screen';
import {
  odooLoginReq
} from "../service/odooLoginReq";
import {
  Utils
} from "../service/utils";

import {
  LogInPage
} from '../pages/log-in/log-in';
import {
  HomePage
} from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
  providers: [odooLoginReq, Utils]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LogInPage;

  pages: Array < {
    title: string,
    component: any
  } > ;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen, public odooRpc: odooLoginReq) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [{
      title: 'Página Principal',
      component: HomePage
    }];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LogInPage);
  }
}
