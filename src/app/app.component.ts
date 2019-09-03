import {Component, OnInit} from '@angular/core';
import {User} from 'firebase';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  isTokenPresent: any;
    constructor() {
    }

    ngOnInit(): void {
      this.isTokenPresent = localStorage.getItem('token');
    }


}
