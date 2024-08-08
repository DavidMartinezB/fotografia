import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { PostPhotoComponent } from './components/post-photo/post-photo.component';
import { PostSubcategoryComponent } from './components/post-subcategory/post-subcategory.component';
import { FamiliasComponentComponent } from './components/familias-component/familias-component.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { FormsModule } from '@angular/forms';
import { CreateFormsComponent } from './components/create-forms/create-forms.component';
import { FotoDetalleComponent } from './components/foto-detalle/foto-detalle.component';



@NgModule({
  declarations: [
    PagesComponent,
    AsideComponent,
    MainpageComponent,
    HeaderComponent,
    PostPhotoComponent,
    PostSubcategoryComponent,
    FamiliasComponentComponent,
    EspeciesComponent,
    FotosComponent,
    CreateFormsComponent,
    FotoDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    
  ],
  exports: [
    PagesComponent
  ]
})
export class FotoeModule { }
