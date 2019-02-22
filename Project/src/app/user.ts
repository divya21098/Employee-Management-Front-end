import { Iemployee } from "./employee";

export class User {

    // public id: number, public email: string, public password: string
    constructor( public employee: Iemployee ) {
        
    }
}
