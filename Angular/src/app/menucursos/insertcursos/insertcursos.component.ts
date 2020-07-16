import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

import gql from 'graphql-tag';

const postCursos = gql`
  mutation nuevoCurso($input: CursoInput!) {
    nuevoCurso(input: $input) {
      titulo
      profesor
      genero
      descripcion
    }
  }
`;
@Component({
  selector: 'app-insertcursos',
  templateUrl: './insertcursos.component.html',
  styleUrls: ['./insertcursos.component.scss'],
})
export class InsertcursosComponent implements OnInit {
  createcursoForm: FormGroup;
  dataCursos;
  private _Subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apollo: Apollo
  ) {}

  ngOnInit(): void {
    this.createcursoForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      profesor: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      genero: ['', [Validators.required]],
    });
  }
  registerCurso(): void {
    this.dataCursos = {
      data: {
        titulo: `${this.createcursoForm.get('titulo').value}`,
        profesor: `${this.createcursoForm.get('profesor').value}`,
        genero: `${this.createcursoForm.get('genero').value}`,
        descripcion: `${this.createcursoForm.get('descripcion').value}`,
      },
    };
    if(this.createcursoForm.valid){
      this._Subscription = this.apollo
        .mutate<any>({
          mutation: postCursos,
          variables: {
            input: this.dataCursos.data,
          },
        })
        .subscribe(
          (data) => {
            console.log(data);
            if (data) {
              this.router.navigate(['/menucursos']);
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
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `Campos requeridos :*`,
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
}
