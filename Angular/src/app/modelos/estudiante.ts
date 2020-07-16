export type Estudiantes ={
    apellido:String;
    email:string;
    direccion:string;
    edad:string;
    foto:string;
}

export type Query = {
    getEstudiantes:Estudiantes[]
}