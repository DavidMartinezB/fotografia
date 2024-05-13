import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './fotoe/pages/pages.component';
import { MainpageComponent } from './fotoe/components/mainpage/mainpage.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [ 
      {
        path: 'home',
        component: MainpageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
