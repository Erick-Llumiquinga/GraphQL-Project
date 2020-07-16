import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

import gql from 'graphql-tag';
const postEstudy = gql`
  mutation nuevoEstudiante($input: EstudianteInput!) {
    nuevoEstudiante(input: $input) {
      nombre
      email
      apellido
      direccion
      edad
      # foto
      password
    }
  }
`;
@Component({
  selector: 'app-insertestudiantes',
  templateUrl: './insertestudiantes.component.html',
  styleUrls: ['./insertestudiantes.component.scss'],
})
export class InsertestudiantesComponent implements OnInit {
  estudiantesForm: FormGroup;
  dataUser;
  private _Subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.estudiantesForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      // foto: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }
  registerCurso(): void {
    this.dataUser = {
      data: {
        nombre: `${this.estudiantesForm.get('nombre').value}`,
        email: `${this.estudiantesForm.get('email').value}`,
        apellido: `${this.estudiantesForm.get('apellido').value}`,
        direccion: `${this.estudiantesForm.get('direccion').value}`,
        edad: `${this.estudiantesForm.get('edad').value}`,
        // foto: `${this.estudiantesForm.get('foto').value}`,
        password: `${this.estudiantesForm.get('password').value}`,
      },
    };
    let confirmPassword = this.estudiantesForm.get('confirmPassword').value;

    if (this.dataUser.data.password === confirmPassword) {
      if (this.estudiantesForm.valid) {
        this._Subscription = this.apollo
          .mutate<any>({
            mutation: postEstudy,
            variables: {
              input: this.dataUser.data,
            },
          })
          .subscribe(
            (data) => {
              console.log(data);
              if (data) {
                this.router.navigate(['/menuestudiantes']);
              } else {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Bienvenido',
                  showConfirmButton: false,
                  timer: 2000,
                });
              }
            },
            (err) => {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: `${err}/*`,
                showConfirmButton: false,
                timer: 2000,
              });
            }
          );
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Campos requeridos :*`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `contraseñas no coinciden :*`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
