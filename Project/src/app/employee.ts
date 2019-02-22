export class Iemployee {
    id: number;
    name: string;
    surname: string;
    //gender: string;
    department:string;
    position:string;
    pay:number;
    constructor(id,name,surname,dept,pos,pay) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        //this.gender=gender;
        this.department=dept;
        this.position=pos;
        this.pay=pay;
    }
}