import {User} from './user';
import {Gender} from '../enums/gender';
import {Role} from '../enums/role';

export class Doctor extends User {

    constructor(public id?: number,
                public name?: string,
                public surname?: string,
                public fatherName?: string,
                public speciality?: string,
                public gender?: Gender,
                public image?: string,
                public username?: string,
                public password?: string,
                public phone?: string,
                public dateOfBirth?: string,
                public role?: Role,
    ) {
        super(/*id, name, username, password, role, phone,*/ /*dateOfBirth*/);
    }
}
