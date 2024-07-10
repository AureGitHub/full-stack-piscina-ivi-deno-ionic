# euromillones-ttec-deno-ionic
Full stack. server deno, client ionic-angular

 "baseHref": "/ionic/",

 para debug

ionic serve   CORRER EN EL PUERTO DE ANGULAR (8100)
Para ejecutar: ionic serve (ionic serve --address 192.168.1.72 --ssl)
 
para PRO
ionic build --prod   CORRE EN EL PUERTO DE DENO (3000)

.env
produccion = false PARA DEBGUG
             true PARA PRODUCCION




Funcionalidad incluidas en la librería base ('app-base-lib')

BasePage ej. export class ApuestaPage extends BasePage implements OnInit { Propiedades // objeto para realizar consultas objPagFilterOrder : any;

  // columnas de una tabla
  colums = [];

  isLoading = false;
  // entidad que se selecciona al seleccionar una fila de la tabla
  entitySelected: any;

  // entidad de la BD que se trata en la página (ej Apuesta)
  entityName = '';

  //lista para almacenar los valores obtenidos en la consulta
  lstPrincipal : any[];

  // para poder refrescar la página
  tableRefresh : any;

  // usuario conectado
  user: any;
Ejemplo para hacer una query const objPagFilterOrder = { pagination: null, columns: [ { name: 'id', prop: 'id', type: 'number', filterInit: ' "estadoid" <> 2' }, { name: 'name', prop: 'name', type: 'text', OrderInit: 'ASC' }, ], mode: 'C' };

const objHttp: classHttp = new classHttp('get', 'user',objPagFilterOrder);
const resp = await this.myHttpService.ejecuteURL(objHttp);

Metodos (estan pensados para gestionar en la página una tabla: listado, crear, modificar, borrar) // Obtiene el usuario async Init()

   // carga la lista de la entidad. Llama al métod get del server (isLoading)
  async loadList(){

   // al invocarlo, refresca la tabla
  getTableRefresh(){

   // al seleccionar un item de la tabla
  selectItem(item){

  // no tengo muy claro para que usarlo
  async save(entity){

  // no tengo muy claro para que usarlo
  async borrar(entity){
