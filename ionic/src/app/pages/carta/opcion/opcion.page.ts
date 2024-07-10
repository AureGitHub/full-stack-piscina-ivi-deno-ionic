import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BasePage, MyHttpService, SeguridadService, UtilService, classHttp, typeMessage } from 'app-base-lib';



@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.page.html',
  styleUrls: ['./opcion.page.scss'],
})


export class OpcionPage extends BasePage implements OnInit, OnDestroy  {





 selectedApuesta = null;
 cartacategoriaid: number;

onLoadDataEmiter($event: any) {
}

  columns = [];

  titleTable = 'Opciones de ';



  entityInitialValues : any = null;


  constructor(
    public override  myHttpService: MyHttpService,
    private utilService: UtilService, 
    public override   seguridadService: SeguridadService,
    private router: ActivatedRoute,


  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'CartaOpcion';
  }


  ngOnDestroy() {
  }

  async ngOnInit() {
    this.Init();

    this.titleTable = this.router.snapshot.queryParamMap.get('categoria');
    this.cartacategoriaid = +this.router.snapshot.queryParamMap.get('categoriaid');
    this.entityInitialValues= {cartacategoriaid : this.cartacategoriaid };


    this.columns = [
      { name: 'Titulo', prop: 'tituloPres', type: 'text', }, 
      { name: 'precio', prop: 'precio', type: 'number'},
      { name: '', prop: 'descripcion', type: 'text', },
      { name: 'd', prop: 'disponiblePres',  type: 'action',  action: 'actionCambiarDisponible', canAction : this.user.isAdmin},
      { name: 'cartacategoriaid', prop: 'cartacategoriaid', type: 'number',  filterInit: ` cartacategoriaid = ${this.cartacategoriaid}`, hide : true},
      { name: 'orden', prop: 'orden', type: 'number', OrderInit: 'ASC', hide : true}      
    ];    
    
    this.getTableRefresh();
  }

  toFormData(formValue : any){
    const formData = new FormData();
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }

    return formData;


  }


  async actionEmiter(event: any) {
    switch (event?.action) {
      case 'actionLista':      

      this.selectedApuesta =event.row;       
      break;
      case 'actionCambiarDisponible':

      event.row['disponible'] =  !event.row['disponible'];

      const formData = this.toFormData(event.row);

      let objHttp: classHttp = new classHttp('put','CartaOpcion' ,null, '',formData,event.row['id'] );          
      await this.myHttpService.ejecuteURL(objHttp);
      this.getTableRefresh();

        break;
    }
  }
 
}
