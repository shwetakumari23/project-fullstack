import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {
      path: '',
      redirectTo: 'register',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  

}
