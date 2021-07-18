import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url ='https://api.publicapis.org/categories';

  constructor(private httpClient: HttpClient) {
  }

  getData(){
    return this.httpClient.get(this.url);
  }

}
