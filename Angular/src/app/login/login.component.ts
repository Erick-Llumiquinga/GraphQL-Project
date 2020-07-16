import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PermisosService } from '../servicios/permisos.service';
import { Datarx } from '../models/datarx';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';

const logear = gql`
  query login($email: String, $password: String) {
    login(email: $email, password: $password)
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
  private _querySub: Subscription;
  constructor(
    private router: Router,
    private permisos: PermisosService,
    private apollo: Apollo,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginData = this.formBuilder.group({
      email: ['admi@gmail.com', Validators.required],
      password: ['1', Validators.required],
    });
  }
  ngOnDestroy() {
    this._querySub.unsubscribe();
  }
  login() {
    let email = this.loginData.get('email').value;
    let password = this.loginData.get('password').value;
    this._querySub = this.apollo
      .watchQuery<any>({
        query: logear,
        variables: {
          email,
          password,
        },
      })
      .valueChanges.subscribe(({ data }) => {
        if (data.login !== null) {
          this.loginData = data;
          this.permisos.decodificarToken(data.login.token);
          console.log(this.permisos.decodificarToken(data.login.token))
          this.router.navigate(['/menu']);
        } else {
          email = '';
          password = '';
          const Toast = Swal.fire({
            position: 'top-right',
            icon: 'error',
            title: `${data.msg}`,
            showConfirmButton: false,
            timer: 3000,
          });
        }
      });
  }
}
