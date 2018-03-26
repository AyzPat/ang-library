import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class AppService {
  breadcrum:{};
  constructor (){
      this.breadcrum={name:'Books',url:''}
  }
}
