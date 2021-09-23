import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { User } from '../Models/user.model';
import { mapTo,catchError,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly REST_API_SERVER = "http://localhost/";
  private readonly JWT_TOKEN = "JWT_TOKEN";
  private readonly REFRESH_TOKEN = "REFRESH_TOKEN";

  private usrActualSubject: BehaviorSubject<User> = new BehaviorSubject<User>({user:"",rol:-1,id:""});
  usrActual = this.usrActualSubject.asObservable();
  user: User;

  constructor(
    private _http: HttpClient,
    private _route : Router,
  ) {
    this.user= new User();
  }

  login(data:any){
     return this._http.post<any>(`${this.REST_API_SERVER}/user/login`,data)
            .pipe(
                //A diferencia del anterior retorna un valor específico:
                mapTo(new User()),
                catchError(error => {
                  return of (error.status)
                }));
  }

  public get valorUsrActual(): User{
    return this.usrActualSubject.value;
  }


  async logout(){
    const data : User = {
      user:localStorage.getItem("user")?? '',
      id:localStorage.getItem("id")?? ''
    };
    this._http.post<any>(`${this.REST_API_SERVER}/user/login`,data)
      .pipe(
          //A diferencia del anterior retorna un valor específico:
          tap( res =>{
            if(res){
              this._route.navigate(['/login']);
            }
          }),

          catchError(error => {
            return of (error.status)
      }));
  }

  /**
   * Retorna verdadero si el token existe y aún no ha expirado
   */
  public isLoggedIn(){
    //Convierto lo que me decuelve el método en una expresión booleana:
    return !!this.getJWToken();
  }



  public getJWToken(){
    return localStorage.getItem(this.JWT_TOKEN);
  }


  private saveTokenJWT = (token: string) => {
    localStorage.setItem(this.JWT_TOKEN, token);
  }

  private saveRefreshToken = (token: string) => {
    localStorage.setItem(this.REFRESH_TOKEN, token);

  }


  /**
   * Elimina un token y la info del usuario del localStorage:
   */
  private deleteTokens(){
    localStorage.clear();
  }

}
