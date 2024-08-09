import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';

@Component({
  selector: 'app-create-forms',
  templateUrl: './create-forms.component.html',
  styleUrls: ['./create-forms.component.scss']
})
export class CreateFormsComponent implements OnInit {
  selectedForm: string = '';
  animal: any = { nombre: '' };
  familia: any = { nombre: '', animalId: null };
  especie: any = { nombre: '', nombreCientifico: '', familiaId: null };
  foto: any = { nombre: '', animalId: null, familiaId: null, especieId: null, fecha: '', imagen: null };
  fileNames: string[] = []; // Nueva propiedad para almacenar los nombres de los archivos
  selectedFiles: File[] = []; // Nueva propiedad para almacenar los archivos seleccionados
  fotoData: any = {}
  fotoQueue: any[] = [];
  isProcessingQueue: boolean = false;


  animales: any[] = [];
  familias: any[] = [];
  especies: any[] = [];

  constructor(private apiConnectionService: ApiConnectionService) { }

  ngOnInit() {
    this.loadAnimales();
    this.loadFamilias();
    this.loadEspecies();
  }

  loadAnimales() {
    this.apiConnectionService.getAnimales().subscribe(data => {
      this.animales = data;
    });
  }

  loadFamilias() {
    this.apiConnectionService.getFamilias().subscribe((data: any) => {
      this.familias = data;
    });
  }

  loadEspecies() {
    this.apiConnectionService.getEspecies().subscribe((data: any) => {
      this.especies = data;
    });
  }

  selectForm(form: string) {
    this.selectedForm = form;
  }

  onSubmitAnimal() {
    this.apiConnectionService.createAnimal(this.animal).subscribe(response => {
      console.log('Animal created:', response);
    });
  }

  onSubmitFamilia() {
    this.familia.animalId = Number(this.familia.animalId);
    this.apiConnectionService.createFamilia(this.familia).subscribe(response => {
      console.log('Familia created:', response);
    });
  }

  onSubmitEspecie() {
    this.especie.familiaId = Number(this.especie.familiaId);
    this.apiConnectionService.createEspecie(this.especie).subscribe(response => {
      console.log('Especie created:', response);
    });
  }

  onSubmitFoto() {
    this.foto.animalId = Number(this.foto.animalId);
    this.foto.familiaId = Number(this.foto.familiaId);
    this.foto.especieId = Number(this.foto.especieId);
    const fotoData = {
      nombre: this.fotoData.nombre,
      animalId: this.foto.animalId,
      familiaId: this.foto.familiaId,
      especieId: this.foto.especieId,
      fecha: this.foto.fecha,
      imagen: this.fotoData.imagen // Assuming this is a base64 string or similar
    };
  
    // Verificar que el nombre no esté vacío
    if (!fotoData.nombre) {
      console.error('El campo nombre no puede estar vacío');
      return;
    }
  
    console.log('Foto data:', fotoData);
  
    this.apiConnectionService.createFoto(fotoData).subscribe(response => {
      console.log('Foto created:', response);
    }, error => {
      console.error('Error al crear la foto:', error);
    });
  }

  
  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFiles.push(file);
        this.addToQueue(file);
      }
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        this.selectedFiles.push(file);
        this.addToQueue(file);
      }
    }
  }

  addToQueue(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          const jpegDataUrl = canvas.toDataURL('image/jpeg');
          const base64String = jpegDataUrl.split(',')[1]; // Obtener la cadena base64 sin el prefijo
  
          const fotoData = {
            imagen: base64String,
            nombre: file.name.split('.').slice(0, -1).join('.'),
            animalId: Number(this.foto.animalId),
            familiaId: Number(this.foto.familiaId),
            especieId: Number(this.foto.especieId),
            fecha: this.foto.fecha
          };
          this.fotoQueue.push(fotoData);
          this.processQueue();
        }
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  processQueue() {
    if (this.isProcessingQueue || this.fotoQueue.length === 0) {
      return;
    }

    this.isProcessingQueue = true;
    const fotoData = this.fotoQueue.shift();

    this.apiConnectionService.createFoto(fotoData).subscribe(response => {
      console.log('Foto created:', response);
      this.isProcessingQueue = false;
      this.processQueue(); // Process the next item in the queue
    }, error => {
      console.error('Error creating foto:', error);
      this.isProcessingQueue = false;
      this.processQueue(); // Process the next item in the queue even if there's an error
    });
  }
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
}