import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorySelectionService {

  constructor() { }
  private categorySelected = new Subject<string | null>();

  categorySelected$ = this.categorySelected.asObservable();

  selectCategory(category: string | null) {
    this.categorySelected.next(category);
  }
}
