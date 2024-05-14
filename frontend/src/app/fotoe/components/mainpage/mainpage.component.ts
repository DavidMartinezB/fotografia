import { Component } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.scss'
})
export class MainpageComponent {
  fotos = [
    '../../../assets/felino.jpeg', '../../../assets/pajaro.jpeg', '../../../assets/pajaro1.jpeg', '../../../assets/pajaro2.jpeg', '../../../assets/pajaro3.jpeg', '../../../assets/pajaro4.jpeg', 
    '../../../assets/pajaro5.jpeg', '../../../assets/pajaro6.jpeg', '../../../assets/pajaro7.jpeg', '../../../assets/pajaro8.jpeg', '../../../assets/pajaro9.jpeg', '../../../assets/pajaro10.jpeg',
    '../../../assets/pajaro11.jpeg', '../../../assets/pajaro12.jpeg', '../../../assets/pajaro13.jpeg', '../../../assets/pajaro14.jpeg', '../../../assets/pajaro15.jpeg', '../../../assets/pajaro16.jpeg',
    '../../../assets/pajaro17.jpeg', '../../../assets/pajaro18.jpeg', '../../../assets/pajaro19.jpeg', '../../../assets/pajaro20.jpeg', '../../../assets/pajaro21.jpeg', '../../../assets/pajaro22.jpeg',
    '../../../assets/pajaro23.jpeg', '../../../assets/pajaro24.jpeg', '../../../assets/pajaro25.jpeg', '../../../assets/pajaro26.jpeg', '../../../assets/pajaro27.jpeg', '../../../assets/pajaro28.jpeg',
    '../../../assets/reptil.jpeg', '../../../assets/zorro.jpeg',
  ]
  selectedImage: string | null = null;

  selectImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }
}
