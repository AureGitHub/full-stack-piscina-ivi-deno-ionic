import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BasePage, MyHttpService, SeguridadService, UtilService, classHttp, typeMessage } from 'app-base-lib';



@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})


export class CategoriaPage extends BasePage implements OnInit {


a=''


 selectedApuesta = null;

onLoadDataEmiter($event: any) {
}

  columns = [];


  constructor(
    public override  myHttpService: MyHttpService,
    private utilService: UtilService, 
    public override   seguridadService: SeguridadService,
    private router: Router,


  ) {
    super(myHttpService, seguridadService);
    this.entityName = 'cartaCategoria';
  }

  async ngOnInit() {
    this.Init();

    this.columns = [
      { name: 'Título', prop: 'tituloPres', type: 'text', },
      { name: 'incluir', prop: 'incluirPres',  type: 'action',  action: 'actionCambiarIncluir', canAction : this.user.isAdmin},
      { name: 'orden', prop: 'orden', type: 'number', OrderInit: 'ASC', hide : true},
      {   type: 'action',  action: 'actionLista', canAction : this.user.isAdmin , icon:'book-outline'},
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
      this.router.navigate([`/opcion`],
      { queryParams: { categoria: event.row['titulo'] , categoriaid: event.row['id'] } }
      );

      break;

      case 'actionCambiarIncluir':

      event.row['incluir'] =  !event.row['incluir'];

      const formData = this.toFormData(event.row);

      let objHttp: classHttp = new classHttp('put','cartaCategoria' ,null, '',formData,event.row['id'] );          
      await this.myHttpService.ejecuteURL(objHttp);
      this.getTableRefresh();



        break;
    }
  }


  
}
