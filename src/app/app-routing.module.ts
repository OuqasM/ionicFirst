import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calcul',
    loadChildren: () => import('./calcul/calcul.module').then( m => m.CalculPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'sub',
    loadChildren: () => import('./sub/sub.module').then( m => m.SubPageModule)
  },
  {
    path: 'mult',
    loadChildren: () => import('./mult/mult.module').then( m => m.MultPageModule)
  },
  {
    path: 'div',
    loadChildren: () => import('./div/div.module').then( m => m.DivPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
