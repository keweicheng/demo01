import { Component } from '@angular/core';
import { Account } from './model/account.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /*畫面*/
  styleUrls: ['./app.component.scss']
})
export class AppComponent {/*變數 */
  title = 'demo01';
  tw = 1; /*lesson1*/
  url = " https://www.google.com ";
  isShow = true;

  weeks = ['星期1', '星期2', '星期3'];

  users = [
    { name: "abc", age: 18 },
    { name: "ghi", age: 20 },
  ];

  acc: Account = {
    account: 'user01',
    password: '123'
  };

  now = new Date();

  sayHi(word: string = 'Hello') {
    //alert(this.url + val);
    alert(word);
  }

  changeShow() {
    this.isShow = !this.isShow;
  }



}
