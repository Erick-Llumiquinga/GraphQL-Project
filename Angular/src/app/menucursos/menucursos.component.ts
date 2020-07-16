import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';
import gql from 'graphql-tag';
import Swal from 'sweetalert2';

const getCursos = gql`
  {
    getCursos {
      _id
      titulo
      profesor
      descripcion
      genero
      # asistentes
    }
  }
`;

const eliminarCurso = gql`
  mutation eliminarCurso($_id: ID!) {
    eliminarCurso(_id: $_id)
  }
`;
@Component({
  selector: 'app-menucursos',
  templateUrl: './menucursos.component.html',
  styleUrls: ['./menucursos.component.scss']
})
export class MenucursosComponent implements OnInit {

  cursos:Array<any>[];
  private deleteSubscription: Subscription;
  private querySubscription: Subscription;
  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
 this.getcursos();
  }

  getcursos() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: getCursos,
      })
      .valueChanges.subscribe(({ data }) => {
        this.cursos = data.getCursos;
        console.log(this.cursos)
      });
  }



  // getcursos():void{
  //   this.cursos = this.apollo.watchQuery<Query>(
  //     {
  //       query: gql`
  //       query getCursos{
  //         getCursos{
  //           titulo
  //           profesor
  //           genero
  //           descripcion
  //           asistentes
  //         }
  //       }`
  //     })
  //      .valueChanges
  //      .pipe(
  //       map(result => result.data.getCursos)
  //     );
  // }
 
  deleteCurso(_id) {
    console.log(_id);
    this.deleteSubscription = this.apollo
      .mutate({
        mutation: eliminarCurso,
        variables: {
          _id,
        },
      })
      .subscribe(({ data }: any) => {
        if (data.eliminarCurso) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: "eliminado",
            showConfirmButton: false,
            timer: 2000,
          })
          // window.location.reload();
          // this.deleteSubscription.unsubscribe();
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: "Error",
            showConfirmButton: false,
            timer: 2000,
          })
        }
      });
  }
}
