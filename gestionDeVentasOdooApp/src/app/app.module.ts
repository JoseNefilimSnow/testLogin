import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";

import { MyApp } from "./app.component";
import { LogInPage } from "../pages/log-in/log-in";
import { HomePage } from "../pages/home/home";
import { odooLoginReq } from "../service/odooLoginReq";
import { Utils } from "../service/utils";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [MyApp, HomePage, LogInPage],
  imports: [BrowserModule,HttpModule, IonicModule.forRoot(MyApp), HttpClientModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LogInPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    odooLoginReq,
    Utils
  ]
})
export class AppModule {}
