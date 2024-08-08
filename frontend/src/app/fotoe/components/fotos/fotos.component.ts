import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {
  fotos: any[] = [];
  currentPage: number = 1;
  pageSize: number = 10; // Número de fotos por página

  constructor(
    private apiConnectionService: ApiConnectionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const especieId = +this.route.snapshot.paramMap.get('especieId')!;
    this.loadFotos(especieId, this.currentPage, this.pageSize);
  }

  loadFotos(especieID: number, page: number, pageSize: number): void {
    this.apiConnectionService.getFotosPorEspecieId(especieID, page, pageSize).subscribe((fotos: any[]) => {
      console.log(fotos);
      this.fotos = fotos.map((foto: { imagen: any; }) => {
        console.log(foto);
        return {
          ...foto,
          imagenUrl: this.convertBufferToUrl(foto.imagen)
        };
      });
    });
  }

  nextPage(): void {
    this.currentPage++;
    const especieId = +this.route.snapshot.paramMap.get('especieId')!;
    this.loadFotos(especieId, this.currentPage, this.pageSize);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      const especieId = +this.route.snapshot.paramMap.get('especieId')!;
      this.loadFotos(especieId, this.currentPage, this.pageSize);
    }
  }

  convertBufferToUrl(buffer: { type: string, data: number[] }): string {
    console.log('Buffer:', buffer);
  
    // Extraer el array de datos del objeto buffer
    const byteArray = new Uint8Array(buffer.data);
    console.log('Byte Array:', byteArray);
  
    // Convertir el array de bytes a una cadena base64 de manera más eficiente
    let binary = '';
    const len = byteArray.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(byteArray[i]);
    }
    let base64String = btoa(binary);
    console.log('Base64 String:', base64String);
  
    // Determinar el tipo de imagen y añadir el prefijo correcto
    let mimeType = '';
    switch (buffer.type) {
      case 'image/png':
        mimeType = 'image/png';
        break;
      case 'image/jpg':
      case 'image/jpeg':
        mimeType = 'image/jpeg';
        break;
      default:
        mimeType = 'application/octet-stream'; // Tipo por defecto si no se reconoce el tipo de imagen
    }
  
    // Eliminar el prefijo incorrecto si existe
    base64String = base64String.replace('dataimage/jpegbase64', '');
    base64String = base64String.replace('dataimage/jpgbase64', '');
    base64String = base64String.replace('dataimage/pngbase64', '');
  
    // Retornar la URL de datos con el prefijo correcto
    const dataUrl = `data:${mimeType};base64,${base64String}`;
    console.log('Data URL:', dataUrl);
    return dataUrl;
  }
}

    // // Eliminar el prefijo incorrecto si existe
    // base64String = base64String.replace('dataimage/jpegbase64', '');
    // base64String = base64String.replace('dataimage/jpgbase64', '');
    // base64String = base64String.replace('dataimage/pngbase64', '');