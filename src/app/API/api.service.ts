import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ROOT_URL = "http://srv1.deniba.at:1984";
  constructor(private http: HttpClient) { }

  executeSQL(sqlStatment: string, MaxRows:string) {
    let body = 
    {
        "MetaInfo": {
            "Object": "Any",
            "Action": "query",
            "SQLStatement": sqlStatment,
            "Offset": "0",
            "MaxRows": MaxRows
        }
    }
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    let options = { headers,withCredentials:false};
    
    return this.http.post(this.ROOT_URL+"/deniba", body).toPromise();
  }
}
