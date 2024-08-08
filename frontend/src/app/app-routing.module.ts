import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './fotoe/pages/pages.component';
import { MainpageComponent } from './fotoe/components/mainpage/mainpage.component';
import { PostPhotoComponent } from './fotoe/components/post-photo/post-photo.component';
import { PostSubcategoryComponent } from './fotoe/components/post-subcategory/post-subcategory.component';
import { FamiliasComponentComponent } from './fotoe/components/familias-component/familias-component.component';
import { EspeciesComponent } from './fotoe/components/especies/especies.component';
import { FotosComponent } from './fotoe/components/fotos/fotos.component';
import { CreateFormsComponent } from './fotoe/components/create-forms/create-forms.component';
import { FotoDetalleComponent } from './fotoe/components/foto-detalle/foto-detalle.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [ 
      {
        path: '',
        component: MainpageComponent
      },
      {
        path: 'familias/:animalId',
        component: FamiliasComponentComponent
      },
      {
        path: 'especies/:familiaId',
        component: EspeciesComponent
      },
      {
        path: 'fotos/:especieId',
        component: FotosComponent
      },
      {
        path: 'subir-img',
        component: PostPhotoComponent
      },
      {
        path: 'subir-categoria',
        component: PostSubcategoryComponent
      },
      {
        path: 'crear-elementos',
        component: CreateFormsComponent
      },
      {
        path:'foto-detalle/:id',
        component: FotoDetalleComponent
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
