import {
  Injectable
} from '@angular/core';
import {
    HttpHeaders,
    HttpClient
  } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class odooLoginReq {

  private jsonRpcID: number = 0;
  public headers;
  private odoo_server: string;

  constructor(private http: HttpClient) {}

  /**
   * Inicializa variables de este ts
   */
  public init(configs: any) {
    console.log("Init: "+JSON.stringify(configs));
    this.odoo_server = configs.odoo_server;
    this.http_auth = configs.http_auth || null;
  }

  public login(db: string, login: string, password: string) {
    console.log("En login: " + db);
    console.log("En login: " + login);
    console.log("En login: " + password);
    let params = {
      db: db,
      login: login,
      password: password,
      base_location: this.odoo_server,
      context: {}
    };
    console.log("Parametros para log: " + JSON.stringify(params));
    return this.sendRequest("/web/session/authenticate/", params)//Enviamos la request a la clase con la url de donde se autentifica  
  }

  public sendRequest(url: string, params: Object): Observable < any > {
    console.log("Send request: "+ JSON.stringify(params) + "a url: "+ this.odoo_server+url);

    let options = this.buildRequest(url, params);//Llama a la creación de una request
    this.headers = { headers : new HttpHeaders ({'Content-Type':'application/json','Access-Control-Allow-Origin':'*'})};
    let a = this.http.post(this.odoo_server + url, options, this.headers);
    return a;
  }

  private buildRequest(url: String, params: any) {
    this.jsonRpcID += 1;
    return JSON.stringify({
      jsonrpc: "2.0",
      method: "call",
      id: this.jsonRpcID,
      params: params,
    });
  }
}
