import { Injectable } from '@nestjs/common';
import { CreateAnimalDto, CreateEspecieDto, CreateFamiliaDto, CreateFotoDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Injectable()
export class ApiService {
    createAnimal(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new animal';
    }
    
    createFamilia(createFamiliaDto: CreateFamiliaDto) {
        return 'This action adds a new familia';
    }

    createEspecie(createEspecieDto: CreateEspecieDto) {
        return 'This action adds a new especie';
    }

    createFoto(createFotoDto: CreateFotoDto) {
        return 'This action adds a new foto';
    }
}
