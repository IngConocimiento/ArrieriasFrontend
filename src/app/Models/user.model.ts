export class User{

  user?: string;
  rol?: number;
  id?: string;
  token? : string;
  password?: string;
  nombres?: string;
  apellidos?: string;


  constructor(){
    this.user= '';
    this.rol= undefined;
    this.id= '';
    this.token= '';
    this.password= '';
    this.nombres= '';
    this.apellidos= '';
  }
}
