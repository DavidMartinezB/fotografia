import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from '../../services/api-connection.service';

@Component({
  selector: 'app-foto-detalle',
  templateUrl: './foto-detalle.component.html',
  styleUrls: ['./foto-detalle.component.scss']
})
export class FotoDetalleComponent implements OnInit {
  foto: any;
  fecha: any;
  animalNombre!: string;
  especieNombre!: string;
  familiaNombre!: string;

  constructor(
    private route: ActivatedRoute,
    private apiConnectionService: ApiConnectionService
  ) {}

  ngOnInit(): void {
    const fotoId = +this.route.snapshot.paramMap.get('id')!;
    this.apiConnectionService.getFotoById(fotoId).subscribe((foto: any) => {
      this.foto = foto;
      this.fecha = foto.fecha.slice(0, 10); // Eliminar la hora
      this.loadAdditionalData();
    });
  }

  loadAdditionalData(): void {
    this.apiConnectionService.getAnimalById(this.foto.animalId).subscribe((animal: any) => {
      this.animalNombre = animal.nombre;
    });

    this.apiConnectionService.getEspecieById(this.foto.especieId).subscribe((especie: any) => {
      this.especieNombre = especie.nombre;
    });

    this.apiConnectionService.getFamiliaById(this.foto.familiaId).subscribe((familia: any) => {
      this.familiaNombre = familia.nombre;
    });
  }
  convertBufferToUrl(buffer: { type: string, data: number[] }): string {

  
    // Extraer el array de datos del objeto buffer
    const byteArray = new Uint8Array(buffer.data);

  
    // Convertir el array de bytes a una cadena base64 de manera más eficiente
    let binary = '';
    const len = byteArray.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(byteArray[i]);
    }
    let base64String = btoa(binary);

  
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
    return dataUrl;
  }
}