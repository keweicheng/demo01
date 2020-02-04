import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  name = 'aaaa';
  constructor() { }

  sayHello(){
    alert(this.name);
  }
}
