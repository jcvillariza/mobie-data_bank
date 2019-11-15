import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'property-detail',
    loadChildren: () => import('./property-detail/property-detail.module').then( m => m.PropertyDetailPageModule)
  },
  {
    path: 'property-create',
    loadChildren: () => import('./property-create/property-create.module').then( m => m.PropertyCreatePageModule)
  },
  {
    path: 'property-update',
    loadChildren: () => import('./property-update/property-update.module').then( m => m.PropertyUpdatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
