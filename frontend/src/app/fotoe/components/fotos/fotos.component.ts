import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent {
  fotos: any = [];

  constructor(
    private apiConnectionService: ApiConnectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const esspecieId = +this.route.snapshot.paramMap.get('especieId')!;
    this.apiConnectionService.getFotosPorEspecieId(esspecieId).subscribe((data) => {
      this.fotos = data;
      console.log(this.fotos);
    });
  }
}
