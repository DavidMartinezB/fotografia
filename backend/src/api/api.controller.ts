import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
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
    const animal = this.apiService.getAnimales();
    if (!animal) {
      throw new NotFoundException('No se encontraron animales');
    }
    return animal;
  }

  @Get('/animales/id/:id')
  getAnimalPorId(@Param('id') id: string) {
    const animal = this.apiService.getAnimalPorId(+id);
    if (!animal) {
      throw new NotFoundException('No se encontró el animal');
    }
    return animal;
  }

  @Get('/animales/nombreComun/:nombreComun')
  getAnimalPorNombreComun(@Param('nombreComun') nombreComun: string) {
    const nombreComunConEspacios = nombreComun.replace(/-/g, ' ');
    const animal = this.apiService.getAnimalPorNombreComun(nombreComunConEspacios);
    if (!animal) {
      throw new NotFoundException('No se encontró el animal');
    }
    return animal;
  }

  @Get('/familias')
  getFamilias() {
    const familia = this.apiService.getFamilias();
    if (!familia) {
      throw new NotFoundException('No se encontraron familias');
    }
    return familia;
  }

  @Get('/familias/id/:id')
  getFamiliaPorId(@Param('id') id: string) {
    const familia = this.apiService.getFamiliaPorId(+id);
    if (!familia) {
      throw new NotFoundException('No se encontró la familia');
    }
    return familia;
  }

  @Get('/familias/animalId/:idAnimal')
  getFamiliaSegunIdAnimal(@Param('idAnimal') idAnimal: string) {
    const familia = this.apiService.getFamiliaSegunIdAnimal(+idAnimal);
    if (!familia) {
      throw new NotFoundException('No se encontró la familia');
    }
    return familia;
  }

  @Get('/familias/nombreComun/:nombreComun')
  getFamiliaPorNombreComun(@Param('nombreComun') nombreComun: string) {
    const nombreComunConEspacios = nombreComun.replace(/-/g, ' ');
    const familia = this.apiService.getFamiliaPorNombreComun(nombreComunConEspacios);
    if (!familia) {
      throw new NotFoundException('No se encontró la familia');
    }
    return familia;
  }

  @Get('/especies')
  getEspecies() {
    const especie = this.apiService.getEspecies();
    if (!especie) {
      throw new NotFoundException('No se encontraron especies');
    }
    return especie;
  }

  @Get('/especies/id/:id')
  getEspeciePorId(@Param('id') id: string) {
    const especie = this.apiService.getEspeciePorId(+id);
    if (!especie) {
      throw new NotFoundException('No se encontró la especie');
    }
    return especie;
  } 

  @Get('/especies/familiaId/:idFamilia')
  getEspeciesSegunIdFamilia(@Param('idFamilia') idFamilia: string) {
    const especie = this.apiService.getEspeciesSegunIdFamilia(+idFamilia);
    if (!especie) {
      throw new NotFoundException('No se encontraron especies');
    }
    return especie;
  }

  @Get('/especies/nombreComun/:nombreComun')
  getEspeciePorNombreComun(@Param('nombreComun') nombreComun: string) {
    const nombreComunConEspacios = nombreComun.replace(/-/g, ' ');
    const especie = this.apiService.getEspeciesSegunNombreComun(nombreComunConEspacios);
    if (!especie) {
      throw new NotFoundException('No se encontró la especie');
    }
    return especie; 
  }

  @Get('/especies/nombreCientifico/:nombreCientifico')
  getEspeciePorNombreCientifico(@Param('nombreCientifico') nombreCientifico: string) {
    const nombreCientificoConEspacios = nombreCientifico.replace(/-/g, ' ');
    const especie = this.apiService.getEspeciePorNombreCientifico(nombreCientificoConEspacios);
    if (!especie) {
      throw new NotFoundException('No se encontró la especie');
    }
    return especie;
  }

  @Get('/fotos')
  getFotos() {
    const foto = this.apiService.getFotos();
    if (!foto) {
      throw new NotFoundException('No se encontraron fotos');
    }
    return foto;
  }

  @Get('/fotos/id/:id')
  getFotoPorId(@Param('id') id: string) {
    const foto = this.apiService.getFotoPorId(+id);
    if (!foto) {
      throw new NotFoundException('No se encontró la foto');
    }
    return foto;
  }

  @Get('/fotos/especieId/:idEspecie')
  getFotosSegunIdEspecie(@Param('idEspecie') idEspecie: string) {
    const foto = this.apiService.getFotosSegunIdEspecie(+idEspecie);
    if (!foto) {
      throw new NotFoundException('No se encontraron fotos');
    }
    return foto;
  }

  @Get('/fotos/animalId/:idAnimal')
  getFotosSegunIdAnimal(@Param('idAnimal') idAnimal: string) {
    const foto = this.apiService.getFotosSegunIdAnimal(+idAnimal);
    if (!foto) {
      throw new NotFoundException('No se encontraron fotos');
    }
    return foto;
  }

  @Get('/fotos/familiaId/:idFamilia')
  getFotosSegunIdFamilia(@Param('idFamilia') idFamilia: string) {
    const foto = this.apiService.getFotosSegunIdFamilia(+idFamilia);
    if (!foto) {
      throw new NotFoundException('No se encontraron fotos');
    }
    return foto;
  }

  @Get('/fotos/nombre/:nombre')
  getFotosSegunNombre(@Param('nombre') nombre: string) {
    const nombreConEspacios = nombre.replace(/-/g, ' ');
    const foto = this.apiService.getFotosSegunNombre(nombreConEspacios);
    if (!foto) {
      throw new NotFoundException('No se encontraron fotos');
    }
    return foto;
  }

  @Get('/fotos/url/:url')
  getFotoPorUrl(@Param('url') url: string) {
    const foto = this.apiService.getFotoPorUrl(url);
    if (!foto) {
      throw new NotFoundException('No se encontró la foto');
    }
    return foto;
  }
  
  @Get('/busqueda/:query')
  buscarPorNombreComunNombreCientificoNombredeFoto(@Param('query') query: string) {
    const resultado = this.apiService.buscarPorNombreComunNombreCientificoNombredeFoto(query);
    if (!resultado) {
      throw new NotFoundException('No se encontraron coincidencias');
    }
    return resultado;
  }

}
