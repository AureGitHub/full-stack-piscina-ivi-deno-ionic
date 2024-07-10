import { Component, OnInit } from '@angular/core';
import { MyHttpService, SeguridadService, classHttp } from 'app-base-lib';

@Component({
  selector: 'home-ttec-euromillones',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  user: any;

  constructor(
    private seguridadService: SeguridadService,
  ) { 

    this.seguridadService.subjectUser.subscribe(user => {
      this.user = user;      
    });
  }

  async ngOnInit() {
    this.user = this.seguridadService.UserGet();

   

  }

  

 


}
