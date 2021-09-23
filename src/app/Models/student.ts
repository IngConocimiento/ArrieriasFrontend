export class Student{

    
    name? : string;
    gender?: string;
    ancestry? : string;
    hairColour?: string;
    image? : string;
    house ? : string;
    hogwartsStudent?: boolean;

    constructor(){
        this.image ='';
        this.name='';
        this.gender= '';
        this.hairColour='';
        this.ancestry = '';
        this.house= '';
        this.hogwartsStudent=true;
    }

}