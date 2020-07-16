import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import Swal from 'sweetalert2';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

const getEstudiantes = gql`
  {
    getEstudiantes {
      _id
      apellido
      nombre
      email
      direccion
      edad
    }
  }
`;

const eliminarEstudiante = gql`
  mutation eliminarEstudiante($_id: ID!) {
    eliminarEstudiante(_id: $_id)
  }
`;
@Component({
  selector: 'app-menuestudiantes',
  templateUrl: './menuestudiantes.component.html',
  styleUrls: ['./menuestudiantes.component.scss'],
})
export class MenuestudiantesComponent implements OnInit {
  estudiantes:Array<any>[];
  constructor(private apollo: Apollo) {}
  private deleteSubscription: Subscription;
  private querySubscription: Subscription;
  ngOnInit(): void {
    this.getestudiantes();
  }

  getestudiantes() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: getEstudiantes,
      })
      .valueChanges.subscribe(({ data }) => {
        this.estudiantes = data.getEstudiantes;
      console.log(this.estudiantes)
      });
  }

  deleteEstudiante(_id) {
    console.log(_id);
    this.deleteSubscription = this.apollo
      .mutate({
        mutation: eliminarEstudiante,
        variables: {
          _id,
        },
      })
      .subscribe(({ data }: any) => {
        console.log;
        if (data.eliminarEstudiant) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Borrado',
            showConfirmButton: false,
            timer: 2000,
          });
          // window.location.reload();
          // this.deleteSubscription.unsubscribe();
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Error',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  }
}
