import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  HomePage
} from '../home/home';
import {
  odooLoginReq
} from "../../service/odooLoginReq";



@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {

  private user;
  private pwd;
  private dbname = "pruebaodoo";
  private odooUrl:
    string = "urlToUse";
  private swtch: Boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private odoorpc: odooLoginReq) {}

  private advSwitch() {
    if (this.swtch) {
      this.swtch = false;
    } else {
      this.swtch = true
    }
  }
  private changeUrl() {
    this.odooUrl = this.odooUrl;
  }
  //Log-in a Odoo
  private login() {
    this.odoorpc.init({
      odoo_server: "http://" + this.odooUrl,
      http_auth: "username:password"
    });
    console.log("Usuario usado: " + this.user);
    console.log("Contraseña: " + this.pwd);
    console.log("Db: " + this.dbname);
    this.odoorpc
      .login(this.dbname, this.user, this.pwd).subscribe(res => {
        console.log(JSON.stringify(res));
        this.navCtrl.setRoot(HomePage);
      });
  }
}
