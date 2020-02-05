import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // serverIp = 'http://120.97.26.45:8000/'; //使用environment環境連上
  constructor(
    public http: HttpClient
  ) { }

  getData() {
    return this.http.get(environment.serverIp + 'books');
  }
}
