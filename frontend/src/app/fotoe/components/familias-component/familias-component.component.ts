import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiConnectionService } from '../../services/api-connection.service';

@Component({
  selector: 'app-familias-component',
  templateUrl: './familias-component.component.html',
  styleUrl: './familias-component.component.scss'
})
export class FamiliasComponentComponent {

  animaId!: number;
  familias: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiConnectionService: ApiConnectionService,
    private router: Router
  ) {}

  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.animaId = +this.route.snapshot.paramMap.get('animalId')!;
      this.apiConnectionService.getFamiliasPorAnimalId(this.animaId).subscribe((data) => {
        this.familias = data;
        console.log(this.familias);
      });
    });
  }

  onSelectFamilia(familiaId: number) {
    this.router.navigate(['/especies', familiaId]);
  }
}
