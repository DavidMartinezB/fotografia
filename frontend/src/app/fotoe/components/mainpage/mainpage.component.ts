import { Component } from '@angular/core';
import { CategorySelectionService } from '../../services/category-selection.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {

  constructor(private CategorySelectionService: CategorySelectionService) {
    this.CategorySelectionService.categorySelected$.subscribe((category) => {
      this.filterByCategory(category);
    });
  
  }

  fotos = [
    { src: '../../../assets/felino.jpeg', category: 'Felino' },
    { src: '../../../assets/pajaro.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro1.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro2.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro3.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro4.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro5.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro6.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro7.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro8.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro9.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro10.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro11.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro12.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro13.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro14.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro15.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro16.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro17.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro18.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro19.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro20.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro21.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro22.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro23.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro24.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro25.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro26.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro27.jpeg', category: 'Ave' },
    { src: '../../../assets/pajaro28.jpeg', category: 'Ave' },
    { src: '../../../assets/reptil.jpeg', category: 'Reptil' },
    { src: '../../../assets/zorro.jpeg', category: 'Mamífero' },
  ];

  selectedImage: string | null = null;
  filteredFotos = this.fotos;

  selectImage(image: string) {
    this.selectedImage = image;
  }

  filterByCategory(category: string | null) {
    if (category) {
      this.filteredFotos = this.fotos.filter(foto => foto.category === category);
    } else {
      this.filteredFotos = this.fotos;
    }
  }

  closeImage() {
    this.selectedImage = null;
  }
}
