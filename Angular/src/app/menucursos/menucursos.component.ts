import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Cursos, Query} from '../modelos/curso'
@Component({
  selector: 'app-menucursos',
  templateUrl: './menucursos.component.html',
  styleUrls: ['./menucursos.component.scss']
})
export class MenucursosComponent implements OnInit {

  cursos:Observable<Cursos[]>;

  constructor(private apollo:Apollo) { }

  ngOnInit(): void {
 this.getcursos();
  }
  getcursos():void{
    this.cursos = this.apollo.watchQuery<Query>(
      {
        query: gql`
        query getCursos{
          getCursos{
            titulo
            profesor
            genero
          }
        }`
      })
       .valueChanges
       .pipe(
        map(result => result.data.getCursos)
      );
  }
 
}
