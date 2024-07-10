import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RolGuard } from 'app-base-lib';

const routes: Routes = [
    {
    path: 'login',
    loadChildren: () => import( 'app-base-lib').then(m => m.LoginPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },



  {
    path: 'forgot-password',
    loadChildren: () => import( 'app-base-lib').then(m => m.ForgotPasswordModule)
  },

  {
    path: 'categoria',
    loadChildren: () => import('./pages/carta/categoria/categoria.module').then(m => m.CategiriaPagePageModule), 
    canActivate: [RolGuard]
  },

  {
    path: 'opcion',
    loadChildren: () => import('./pages/carta/opcion/opcion.module').then(m => m.OpcionPagePageModule), 
    canActivate: [RolGuard]
  },
  



  {
    path: '**',
    loadChildren: () => import( 'app-base-lib').then(m => m.NotFoundPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,  useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }