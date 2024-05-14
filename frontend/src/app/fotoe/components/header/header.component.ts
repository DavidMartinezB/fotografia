import { Component } from '@angular/core';
import { CategorySelectionService } from '../../services/category-selection.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private categorySelectionService: CategorySelectionService) {}

  categories = [
    {
      name: 'Ave',
      subcategories: ['Subcategoria 1', 'Subcategoria 2', /*...*/]
    },
    {
      name: 'Mamífero',
      subcategories: ['Subcategoria 1', 'Subcategoria 2', /*...*/]
    },
    {
      name: 'Reptil',
      subcategories: ['Subcategoria 1', 'Subcategoria 2', /*...*/]
    },
    // ...
  ];

  selectCategory(category: string | null) {
    this.categorySelectionService.selectCategory(category);
  }
}
