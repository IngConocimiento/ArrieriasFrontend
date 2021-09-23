
import { Component, ElementRef, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';

import {FormControl, Validators, FormGroup } from '@angular/forms';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

import { AuthService } from 'src/app/services/auth.service';
import { PeticionesServiceService } from './../../services/peticiones-service.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public userAccount : User;
  hide = true;

  loginForm :FormGroup;

  //Toast Position
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  returnUrl: string='';

  constructor(
    private _peticionesService : PeticionesServiceService,
    private _authService : AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _route: ActivatedRoute
  ) {
      this.userAccount = {};
      this.loginForm =  new FormGroup({
        email : this.emailFormControl,
        password : this.passwordFormControl

      });

   }

   ngOnInit(){
    //Peermite especificar la ruta a la cual nos vamos a dirigir cuando se inicia sesión: IMPORTANTE
    this.returnUrl = this._route.snapshot.queryParams.returnUrl || '';


   }

  get email() {return this.loginForm.get('email')?.value }
  get password() {return this.loginForm.get('password')?.value }

  emailFormControl = new FormControl('', [
    Validators.required,
    //Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);


  onSubmit(){

      let datos: User = {
        user: this.email,
        password: this.password
      };

      let data = JSON.stringify(datos);

      this._authService.login(data)
          .subscribe((response) => {

              if(response==true){
                  this._router.navigate(['/list']);
              }else{
                this._router.navigate(['/list']);
                this.openSnackBar("¡Bienvenido!","Cerrar")
            }
          });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 10000,
      panelClass: ['blue-snackbar']
    });
  }


}
