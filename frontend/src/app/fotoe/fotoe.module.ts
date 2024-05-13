import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagesComponent,
    AsideComponent,
    MainpageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
})
export class FotoeModule { }
