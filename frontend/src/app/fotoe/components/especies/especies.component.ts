import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrl: './especies.component.scss'
})
export class EspeciesComponent {
  especies: any = [];

  constructor(
    private apiConnectionService: ApiConnectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const familiaId = +this.route.snapshot.paramMap.get('familiaId')!;
    this.apiConnectionService.getEspeciesPorFamiliaId(familiaId).subscribe((data) => {
      this.especies = data;
      console.log(this.especies);
    });
  }

  onSelectedEspecie(especieId: number) {
    this.router.navigate(['/fotos', especieId]);
  }
}
