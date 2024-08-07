import { Component } from '@angular/core';
import { CategorySelectionService } from '../../services/category-selection.service';
import { ApiConnectionService } from '../../services/api-connection.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  searchQuery: any;
  resultadosBusqueda: any = null;

  constructor(private apiConnectionService: ApiConnectionService, private router: Router) {}

  buscar() {
    console.log('Buscando:', this.searchQuery);
    if (this.searchQuery) {
      this.apiConnectionService.buscarPorNombreComunNombreCientificoNombredeFoto(this.searchQuery)
        .subscribe({
          next: (resultados) => {
            this.resultadosBusqueda = resultados;
          },
          error: (error) => {
            console.error('Error al buscar:', error);
            this.resultadosBusqueda = null;
          }
        });
    }
    console.log('Buscando:', this.searchQuery);
    console.log('Resultados:', this.resultadosBusqueda);
  }


  onSelectedEspecie(especieId: number) {
    this.router.navigate(['/fotos', especieId]);
  }
  onSelectedFamilia(familiaId: number) {
    this.router.navigate(['/especies', familiaId]);
  }
}
