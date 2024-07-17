import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateAnimalDto, CreateEspecieDto, CreateFamiliaDto, CreateFotoDto } from './dto/create-api.dto';
import { UpdateApiDto } from './dto/update-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/crear-animal')
  createAnimal(@Body() createAnimalDto: CreateAnimalDto) {
    return this.apiService.createAnimal(createAnimalDto);
  }

  @Post('/crear-familia')
  createFamilia(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.apiService.createFamilia(createFamiliaDto);
  }

  @Post('/crear-especie')
  createEspecie(@Body() createEspecieDto: CreateEspecieDto) {
    return this.apiService.createEspecie(createEspecieDto);
  }

  @Post('/crear-foto')
  createFoto(@Body() createFotoDto: CreateFotoDto) {
    return this.apiService.createFoto(createFotoDto);
  }
}
