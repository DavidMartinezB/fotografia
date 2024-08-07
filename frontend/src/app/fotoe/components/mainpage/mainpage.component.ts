import { Component } from '@angular/core';

import { ApiConnectionService } from '../../services/api-connection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  

  animales: any[] = [];

  constructor(
    private apiConnectionService: ApiConnectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.apiConnectionService.getAnimalConFotos().subscribe((data) => {
      this.animales = data;
      console.log(this.animales);
    });
  }

  onSelectAnimal(animalId: number) {
    this.router.navigate(['/familias', animalId]);
  }
}
