import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http : HttpClient) {
  }

  loadStock(){
    const url = "../data/Datajson.json";

    return this.http.get(url);

  }
}
