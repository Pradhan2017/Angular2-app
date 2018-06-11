import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
      return this.http.get('https://angularapp-e915c.firebaseio.com/.json').pipe(map(    // return Observables like this
         (res) => res.json()
     ));
    }
  }
