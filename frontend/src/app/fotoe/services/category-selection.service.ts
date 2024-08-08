import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorySelectionService {
  constructor(private http: HttpClient) {}

  getAnimalNombre(animalId: number): Observable<string> {
    return this.http.get<string>(`/api/animal/${animalId}/nombre`);
  }

  getEspecieNombre(especieId: number): Observable<string> {
    return this.http.get<string>(`/api/especie/${especieId}/nombre`);
  }

  getFamiliaNombre(familiaId: number): Observable<string> {
    return this.http.get<string>(`/api/familia/${familiaId}/nombre`);
  }
}