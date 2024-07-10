// import { Validators } from "@angular/forms";
import { Validators } from "../../enums.ts";

/*
  tipoid               Int
*/

const entities = {

   cartaCategoria : 
   [
      { name: 'titulo', type: 'text', title: 'Título', validators: [Validators.required] },
      { name: 'incluir', type: 'checkbox', title: 'incluir en Carta', default: true, validators: [Validators.required] },
      { name: 'orden', type: 'number', title: 'Orden', validators: [Validators.required] }
   ],

   CartaOpcion : 
   [
      { name: 'titulo', type: 'text', title: 'Título', validators: [Validators.required] },
      { name: 'descripcion', type: 'text', title: 'Descripción'},
      { name: 'cartacategoriaid', type: 'select', title: 'Categoría', validators: [Validators.required], multiple: false, noTC : true,  coleccion: 'cartaCategoria', id: 'id', desc: 'titulo' },
      { name: 'disponible', type: 'checkbox', title: 'Disponible', default: true, validators: [Validators.required] },
      { name: 'precio', type: 'number', title: 'Precio', validators: [Validators.required] },
      { name: 'orden', type: 'number', title: 'Orden', validators: [Validators.required] }
   ],



   User:
      [
         { name: 'name', type: 'text', title: 'Nombre', validators: [Validators.required] },
         { name: 'email', type: 'text', title: 'Email', validators: [Validators.required, Validators.email] },
         { name: 'password', type: 'password', title: 'Password', validators: [Validators.required] , default : '12345678'},
         { name: 'saldo', type: 'number', title: 'Saldo', validators: [Validators.required] },
         { name: 'estadoid', type: 'select', title: 'Estado', validators: [Validators.required], multiple: false, coleccion: 'TC_UserEstado', id: 'id', desc: 'descripcion', default: 3 },
         { name: 'roleid', type: 'select', title: 'Role', validators: [Validators.required], multiple: false, coleccion: 'TC_UserRole', id: 'id', desc: 'descripcion', default: 3  },
         { name: 'createdAt', type: 'date', title: 'createdAt', validators: [Validators.required], hide : true },         
         { name: 'updatedAt', type: 'date', title: 'updatedAt', validators: [Validators.required], hide : true },         
      ],

};

export default entities;