import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {
  private url = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,

  ) { }

  getAnimales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/animales`);
  }

  getFotoPorAnimalId(id: number) {
    return this.http.get(`${this.url}/fotos/animalId/${id}`);
  }

  getFamiliasPorId(id: number) {
    return this.http.get(`${this.url}/familias/id/${id}`);
  }

  getFamiliasPorAnimalId(id: number) {
    return this.http.get(`${this.url}/familias/animalId/${id}`);
  
  }

  getEspeciesPorId(id: number) {
    return this.http.get(`${this.url}/especies/id/${id}`);
  }

  getEspeciesPorFamiliaId(id: number) {
    return this.http.get(`${this.url}/especies/familiaId/${id}`);
  }

  getFotosPorEspecieId(id: number) {
    return this.http.get(`${this.url}/fotos/especieId/${id}`);
  }

  buscarPorNombreComunNombreCientificoNombredeFoto(query: string) {
    return this.http.get(`${this.url}/busqueda/${query}`);
  }
/**
 * Obtiene una lista de animales con sus respectivas fotos.
 * 
 * Este método aprovecha la programación reactiva mediante el uso de Observables para manejar
 * secuencias de eventos asincrónicos. Un Observable es una abstracción que permite representar
 * y manipular flujos de datos que pueden emitirse a lo largo del tiempo. Esto es especialmente
 * útil en aplicaciones web donde las operaciones, como las llamadas a APIs, son inherentemente
 * asincrónicas.
 * 
 * El proceso se inicia con la llamada a `getAnimales()` para obtener un Observable que emite
 * una lista de animales. Dado que cada animal necesita sus fotos asociadas, se transforma este
 * Observable utilizando `switchMap`, lo que permite cancelar observables anteriores y suscribirse
 * a uno nuevo basado en el valor emitido por el Observable original. Esto es crucial para evitar
 * problemas de sincronización y asegurar que solo se procese el último evento emitido relevante
 * para la operación en curso.
 * 
 * Para cada animal en la lista, se realiza una llamada a `getFotoPorAnimalId(animal.id)` para
 * obtener otro Observable que emite las fotos del animal. Estas llamadas se realizan en paralelo
 * y se combinan en un único Observable utilizando `forkJoin`. `forkJoin` es utilizado aquí porque
 * espera a que todos los Observables pasados como argumento completen y luego emite un único valor
 * que es una combinación de todos los valores emitidos por los Observables. Esto asegura que todas
 * las fotos sean recuperadas y asignadas a sus respectivos animales antes de emitir la lista final
 * de animales con sus fotos.
 * 
 * Al final, `getAnimalConFotos()` devuelve un Observable que emite una lista de animales, donde
 * cada animal tiene una propiedad `fotos` que contiene sus fotos correspondientes. Este enfoque
 * reactivo facilita el manejo de operaciones asincrónicas complejas y dependencias entre ellas,
 * permitiendo una mayor flexibilidad y eficiencia en el manejo de flujos de datos asincrónicos.
 * 
 * @returns {Observable<any[]>} Un Observable que emite una lista de animales, donde cada animal
 * tiene una propiedad `fotos` que contiene sus fotos correspondientes.
 */
  getAnimalConFotos(): Observable<any[]> {
    // Primero, obtenemos un Observable de una lista de animales llamando a `getAnimales()`.
    return this.getAnimales().pipe(
      // Utilizamos `switchMap` para transformar la lista de animales en un Observable de animales con fotos.
      switchMap((animales) => {
        // Para cada animal, creamos un Observable que obtiene sus fotos y las asigna a la propiedad `fotos` del animal.
        const peticionesFotos = animales.map(animal =>
          this.getFotoPorAnimalId(animal.id).pipe(
            // Utilizamos otro `switchMap` para asignar las fotos obtenidas a la propiedad `fotos` del animal.
            switchMap((fotos) => {
              animal.fotos = fotos; // Asignamos las fotos al animal.
              return of(animal); // Retornamos un Observable del animal con sus fotos.
            })
          )
        );
        // Utilizamos `forkJoin` para combinar todos los Observables de animales con fotos en un único Observable.
        return forkJoin(peticionesFotos); // Combina los observables en un solo observable que emite la lista de animales con fotos.
      })
    );
  }

}
