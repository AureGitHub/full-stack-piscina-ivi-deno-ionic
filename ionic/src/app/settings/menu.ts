import { Role } from 'app-base-lib';

export const  menuItems =   [
   {
     title: 'Carta',
     icon: 'clipboard-outline',
     path: '/categoria/',
     key: 'categoria',  // para encontar la ruta en los guard
     roles: [Role.god, Role.admin]
   },

   {
    title: 'Opcion',
    icon: 'clipboard-outline',
    path: '/opcion/',
    key: 'opcion',  // para encontar la ruta en los guard
    roles: [Role.god, Role.admin],
    hide : true
  },

   
 ]