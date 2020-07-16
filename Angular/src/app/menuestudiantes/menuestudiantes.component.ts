import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Estudiantes, Query } from '../modelos/estudiante';

@Component({
  selector: 'app-menuestudiantes',
  templateUrl: './menuestudiantes.component.html',
  styleUrls: ['./menuestudiantes.component.scss'],
})
export class MenuestudiantesComponent implements OnInit {
  estudiantes:Observable<Estudiantes[]>;

  constructor(private apollo:Apollo) {}

  ngOnInit(): void {
    this.getestudiantes();
  }


  getestudiantes(): void {
    this.estudiantes = this.apollo.watchQuery<Query>(
      {
        query: gql`
        query getEstudiantes{
          getEstudiantes{
            apellido
            email
            direccion
            edad
            foto
          }
        }`
      }).valueChanges
      .pipe(
        map(result=>result.data.getEstudiantes)
      )
    }
}
