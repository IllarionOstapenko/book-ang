import {Component, Input, OnInit, Output} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {Patient} from '../../../models/patient';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    patient;

    constructor(private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit() {
        // console.log(this.loginService.userDataSource.getValue());
        // console.log('side-menu');
        // this.patient = this.loginService.userDataSource.getValue();
        setTimeout(() => {
            this.loginService.getCurrentUser().subscribe(value => {
                this.patient = value;
            });
        }, 10);

        // this.loginService.auth().subscribe(value => {
        //     this.user = value;
        //     // console.log(this.user);
        //     // @ts-ignore
        //     if (this.user.role === 'ROLE_PATIENT') {
        //         this.router.navigate(['patient/head']);
        //     } else if (
        //         // @ts-ignore
        //         this.user.role === 'ROLE_DOCTOR') {
        //         this.router.navigate(['patient/home']);
        //     }
        // });

    }

}
