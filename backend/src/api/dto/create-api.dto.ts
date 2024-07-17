
export class CreateAnimalDto {
    nombre: string;
}

export class CreateFamiliaDto {
    nombre: string;
    animal_id: number;
}

export class CreateEspecieDto {
    nombre: string;
    nombre_cientifico: string;
    familia_id: number;
}

export class CreateFotoDto {
    nombre: string;
    animal_id: number;
    familia_id: number;
    especie_id: number;
    fecha: Date;
    url: string;
}