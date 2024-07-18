import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiService } from './api.service';
import { CreateAnimalDto, CreateEspecieDto, CreateFamiliaDto, CreateFotoDto } from './dto/create-api.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('/crearAnimal')
  createAnimal(@Body() createAnimalDto: CreateAnimalDto) {
    return this.apiService.createAnimal(createAnimalDto);
  }

  @Post('/crearFamilia')
  createFamilia(@Body() createFamiliaDto: CreateFamiliaDto) {
    return this.apiService.createFamilia(createFamiliaDto);
  }

  @Post('/crearEspecie')
  createEspecie(@Body() createEspecieDto: CreateEspecieDto) {
    return this.apiService.createEspecie(createEspecieDto);
  }

  @Post('/crearFoto')
  createFoto(@Body() createFotoDto: CreateFotoDto) {
    return this.apiService.createFoto(createFotoDto);
  }

  @Get('/animales')
  getAnimales() {
    return this.apiService.getAnimales();
  }

  @Get('/animales/id/:id')
  getAnimalPorId(@Param('id') id: string) {
    return this.apiService.getAnimalPorId(+id);
  }

  @Get('/familias')
  getFamilias() {
    return this.apiService.getFamilias();
  }

  @Get('/familias/id/:id')
  getFamiliaPorId(@Param('id') id: string) {
    return this.apiService.getFamiliaPorId(+id);
  }

  @Get('/familias/animalId/:idAnimal')
  getFamiliaSegunIdAnimal(@Param('idAnimal') idAnimal: string) {
    return this.apiService.getFamiliaSegunIdAnimal(+idAnimal);
  }

  @Get('/familias/nombreComun/:nombreComun')
  getFamiliaPorNombreComun(@Param('nombreComun') nombreComun: string) {
    const nombreComunConEspacios = nombreComun.replace(/-/g, ' ');
    return this.apiService.getFamiliaPorNombreComun(nombreComunConEspacios);
  }

  @Get('/especies')
  getEspecies() {
    return this.apiService.getEspecies();
  }

  @Get('/especies/id/:id')
  getEspeciePorId(@Param('id') id: string) {
    return this.apiService.getEspeciePorId(+id);
  } 

  @Get('/especies/familiaId/:idFamilia')
  getEspeciesSegunIdFamilia(@Param('idFamilia') idFamilia: string) {
    return this.apiService.getEspeciesSegunIdFamilia(+idFamilia);
  }

  @Get('/especies/nombreComun/:nombreComun')
  getEspeciePorNombreComun(@Param('nombreComun') nombreComun: string) {
    const nombreComunConEspacios = nombreComun.replace(/-/g, ' ');
    return this.apiService.getEspeciesSegunNombreComun(nombreComunConEspacios);
  }

  @Get('/especies/nombreCientifico/:nombreCientifico')
  getEspeciePorNombreCientifico(@Param('nombreCientifico') nombreCientifico: string) {
    const nombreCientificoConEspacios = nombreCientifico.replace(/-/g, ' ');
    return this.apiService.getEspeciePorNombreCientifico(nombreCientificoConEspacios)
  }

  @Get('/fotos')
  getFotos() {
    return this.apiService.getFotos();
  }

  @Get('/fotos/id/:id')
  getFotoPorId(@Param('id') id: string) {
    return this.apiService.getFotoPorId(+id);
  }

  @Get('/fotos/especieId/:idEspecie')
  getFotosSegunIdEspecie(@Param('idEspecie') idEspecie: string) {
    return this.apiService.getFotosSegunIdEspecie(+idEspecie);
  }

  @Get('/fotos/animalId/:idAnimal')
  getFotosSegunIdAnimal(@Param('idAnimal') idAnimal: string) {
    return this.apiService.getFotosSegunIdAnimal(+idAnimal);
  }

  @Get('/fotos/familiaId/:idFamilia')
  getFotosSegunIdFamilia(@Param('idFamilia') idFamilia: string) {
    return this.apiService.getFotosSegunIdFamilia(+idFamilia);
  }

  @Get('/fotos/nombre/:nombre')
  getFotosSegunNombre(@Param('nombre') nombre: string) {
    const nombreConEspacios = nombre.replace(/-/g, ' ');
    return this.apiService.getFotosSegunNombre(nombreConEspacios);
  }

  @Get('/fotos/url/:url')
  getFotoPorUrl(@Param('url') url: string) {
    return this.apiService.getFotoPorUrl(url);
  }
  

}
