import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsDate, IsString, IsOptional, IsUrl } from 'class-validator';

export class CreateAnimalDto {
    @IsNotEmpty()
    nombre: string;
}

export class CreateFamiliaDto {
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    animalId: number;
}

export class CreateEspecieDto {
    @IsNotEmpty()
    nombre: string;

    @IsNotEmpty()
    nombreCientifico: string;

    @IsNumber()
    familiaId: number;
}

export class CreateFotoDto {
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    animalId: number;

    @IsNumber()
    familiaId: number;

    @IsNumber()
    especieId: number;

    @IsDate()
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    fecha: Date;

    @IsUrl()
    url: string;
}