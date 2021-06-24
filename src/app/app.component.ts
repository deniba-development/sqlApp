import { Component, OnInit } from '@angular/core';
import { ApiService } from './API/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  preloader = false;
  data: any[] = [];
  header:any;
  sqlStatment: string = "select * from Filiale";
  MaxRows = 20;
  constructor(public http: ApiService) {}


  execute() {
    this.preloader = true;
    this.http.executeSQL(this.sqlStatment, this.MaxRows.toString()).then((el:any) => {
      this.header = el.ValueSet[0];
      this.data = el.ValueSet;
      this.preloader = false;
    }).catch((err) => console.log(err))
  }

}
