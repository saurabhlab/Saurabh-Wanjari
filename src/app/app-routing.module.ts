import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';



const routes: Routes = [
  //  { path: 'dashboard', component: BasicInfoComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  {
    path: 'basic-info',
    //canActivate: [MMNoAuthGuard],
    // loadChildren: './ApplicationModules/home/home.module#HomeModule'
    // loadChildren: './applicationModules/admin-module/admin-module.module#AdminModuleModule'
    loadChildren: () => import('./basic-info/basic-info.module').then(m => m.BasicInfoModule)
    // loadChildren: './applicationModules/loginModule/login-module.module#LoginModuleModule'
  },
  { path: '', redirectTo: '/basic-info', pathMatch: 'full' },
  // {
  //   path: '**',
  //   redirectTo: '/login/pagenotfound',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
export class AppRoutingModule { }
