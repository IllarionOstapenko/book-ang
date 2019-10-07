import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Speciality} from '../../../../enums/speciality';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Host} from '../../../../enums/host';
import {PatientService} from '../../../../services/patient.service';
import {Doctor} from '../../../../models/doctor';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {DoctorService} from '../../../../services/doctor.service';

@Component({
    selector: 'app-list-doctor',
    templateUrl: './list-speciality.component.html',
    styleUrls: ['./list-speciality.component.css']
})

export class ListSpecialityComponent implements OnInit {

    // @Input() inputTest;

    specialities;


    doctors: Doctor;
    // @Output() output: Doctor = new EventEmitter<Doctor>();

    // specialities = Object.values(Speciality).map(key => Speciality[key]).filter(value => typeof value === 'string') as unknown as string;

    constructor(private http: HttpClient,
                private doctorService: DoctorService,
                private activatedRoute: ActivatedRoute) {
    }


    ngOnInit() {
        this.activatedRoute.params.subscribe((value) => {
            console.log(value);
        });
        this.doctorService.getAllSpecialities().subscribe(value => {
            this.specialities = value;
            console.log(value);
        });

    }


    getDoctorsBySpeciality(speciality) {
        this.doctorService.getDoctorsBySpeciality(speciality).subscribe(value => {
            // console.log('&&&&&&&&&&&&&&&&&7');
            // console.log(value);
            // console.log('&&&&&&&&&&&&&&&&&7');
            // @ts-ignore
            // console.log('_______________________');
            // console.log(this.doctorService.addListDoctors(value));
            // console.log('_______________________');
            // this.doctorService.addListDoctors(value);
            this.doctors = value;
        });
        // this.router.navigate(['specialities']);
    }
}
