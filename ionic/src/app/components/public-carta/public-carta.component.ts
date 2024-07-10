import { Component, OnInit } from '@angular/core';
import { MyHttpService, classHttp } from 'app-base-lib';

@Component({
  selector: 'public-carta',
  templateUrl: './public-carta.component.html',
  styleUrls: ['./public-carta.component.scss'],
})
export class PublicCartaComponent  implements OnInit {


  selectedOptionCarta: any;


  lstcartaCategoria =  [];
  
  

  isloading: boolean = false;

  lstItemCarta  = null;

  constructor(
    public myHttpService: MyHttpService,

  ) { }

  async ngOnInit() {
    await this.getCarta();
  }


  async handleRefresh(event) {
    await this.getCarta();
    event.target.complete();
  }

  changeState(itemOption: any) {
    itemOption.state = itemOption.state =='closed' ? 'open' : 'closed';
    }


  async getCarta(){


    this.lstcartaCategoria = [];
    this.isloading = true;

    try{
      let objHttp: classHttp = new classHttp('get','cartaCategoria' ,null);          
      let result = await this.myHttpService.ejecuteURL(objHttp);
      result.data.forEach(item => {
        item['state'] = 'closed';
        
      });
  
      let lstcartaCategoriaTmp =result.data.filter(a=> a.incluir);


      objHttp = new classHttp('get','CartaOpcion' ,null);          
      result = await this.myHttpService.ejecuteURL(objHttp);

      let  lstCartaOpcion =result.data.filter(a=> a.disponible);

      lstCartaOpcion.forEach(item => {
        item['state'] = 'closed';   

        let itemCategoria = lstcartaCategoriaTmp.find(a=> a.id ==  item['cartacategoriaid']);
        if(itemCategoria){
          if(!itemCategoria['lstOpcion']){
            itemCategoria['lstOpcion'] = [];
          }
          itemCategoria['lstOpcion'].push(item);
        }
        
      });     
      
      this.lstcartaCategoria = lstcartaCategoriaTmp;
    }
    catch(ex){
      
    }
    finally{
      this.isloading = false;
    }








  }

}
