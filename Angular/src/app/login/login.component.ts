import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermisosService } from '../servicios/permisos.service';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

const logear = gql`
  mutation login($input:LoginInput!) {
    login(input:$input){
      email
      password
    }
  }
`;
// import { read } from 'fs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginData: FormGroup;
  dataUser;
  private postSubscription: Subscription;
  private _querySub: Subscription;
  constructor(
    private router: Router,
    private permisos: PermisosService,
    private apollo: Apollo,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      email: ['admin@gmail.com', Validators.required],
      password: ['admin123456', Validators.required],
    });
  }
  ngOnDestroy() {
  }
  login(): void {
    this.dataUser = {
      data: {
        email: `${this.loginData.get('email').value}`,
        password: `${this.loginData.get('password').value}`,
      },
    };
    if (
      this.dataUser.data.email &&
      this.dataUser.data.password 
    ) {
      this.postSubscription = this.apollo
        .mutate<any>({
          mutation: logear,
          variables: {
            input: this.dataUser.data,
          },
        })
        .subscribe(
          (data :any) => {
            if(data !== undefined){
          //   this.dataUser = data;
          // this.permisos.decodificarToken(data.login.token);
          this.router.navigate(['/home']);
          console.log(this.permisos.getUserLogin());
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 2000,
              })
             this.router.navigate(['/menu'])
            }
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',
        footer: '<a href>Usuario no encontrado</a>'
      })
    }
  }
}
