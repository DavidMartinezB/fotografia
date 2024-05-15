import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PostPhotoComponent } from './components/post-photo/post-photo.component';
import { PostSubcategoryComponent } from './components/post-subcategory/post-subcategory.component';



@NgModule({
  declarations: [
    PagesComponent,
    AsideComponent,
    MainpageComponent,
    HeaderComponent,
    PostPhotoComponent,
    PostSubcategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PagesComponent
  ]
})
export class FotoeModule { }
