import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './fotoe/pages/pages.component';
import { MainpageComponent } from './fotoe/components/mainpage/mainpage.component';
import { PostPhotoComponent } from './fotoe/components/post-photo/post-photo.component';
import { PostSubcategoryComponent } from './fotoe/components/post-subcategory/post-subcategory.component';

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
        path: 'subir-img',
        component: PostPhotoComponent
      },
      {
        path: 'subir-categoria',
        component: PostSubcategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
