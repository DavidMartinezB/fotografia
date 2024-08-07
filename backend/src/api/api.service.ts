import { Injectable } from '@nestjs/common';
import { CreateAnimalDto, CreateEspecieDto, CreateFamiliaDto, CreateFotoDto } from './dto/create-api.dto';
import { Repository } from 'typeorm';
import { Animal, Especie, Familia, Fotos } from './entities/api.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ApiService {

    constructor(
        @InjectRepository(Animal)
        private animalRepository: Repository<Animal>,
        @InjectRepository(Especie)
        private especieRepository: Repository<Especie>,
        @InjectRepository(Familia)
        private familiaRepository: Repository<Familia>,
        @InjectRepository(Fotos)
        private fotosRepository: Repository<Fotos>,
    ) {}

    async createAnimal(createAnimalDto: CreateAnimalDto) {
        const newAnimal = this.animalRepository.create(createAnimalDto);
        return this.animalRepository.save(newAnimal);
    }
    
    async createFamilia(createFamiliaDto: CreateFamiliaDto) {
        const newFamilia = this.familiaRepository.create(createFamiliaDto);
        return this.familiaRepository.save(newFamilia);
    }

    async createEspecie(createEspecieDto: CreateEspecieDto) {
        const newEspecie = this.especieRepository.create(createEspecieDto);
        return this.especieRepository.save(newEspecie);
    }

    async createFoto(createFotoDto: CreateFotoDto) {
        const newFoto = this.fotosRepository.create(createFotoDto);
        return this.fotosRepository.save(newFoto);
    }

    async getAnimales() {
        return this.animalRepository.find();
    }

    async getAnimalPorId(id: number) {
        return this.animalRepository.findOne({where: {id}});
    }

    async getAnimalPorNombreComun(nombre: string) {
        return this.animalRepository.findOne({where: {nombre}});
    }

    async getFamilias() {
        return this.familiaRepository.find();
    }

    async getFamiliaPorId(id: number) {
        return this.familiaRepository.findOne({where: {id}});
    }

    async getFamiliaSegunIdAnimal(idAnimal: number) {
        return this.familiaRepository.find({where: {animalId: idAnimal}});
    }   

    async getFamiliaPorNombreComun(nombre: string) {
        return this.familiaRepository.findOne({where: {nombre}});
    }

    async getEspecies() {
        return this.especieRepository.find();
    }

    async getEspeciePorId(id: number) {
        return this.especieRepository.findOne({where: {id}});
    }

    async getEspeciesSegunIdFamilia(idFamilia: number) {
        return this.especieRepository.find({where: {familiaId: idFamilia}});
    }

    async getEspeciesSegunNombreComun(nombre: string) {
        return this.especieRepository.find({where: {nombre}});
    }

    async getEspeciePorNombreCientifico(nombreCientifico: string) {
        return this.especieRepository.findOne({where: {nombreCientifico}});
      }

    async getFotos() {
        return this.fotosRepository.find();
    }

    async getFotoPorId(id: number) {
        return this.fotosRepository.findOne({where: {id}});
    }

    async getFotosSegunIdEspecie(idEspecie: number) {
        return this.fotosRepository.find({where: {especieId: idEspecie}});
    }

    async getFotosSegunIdAnimal(idAnimal: number) {
        return this.fotosRepository.find({where: {animalId: idAnimal}});
    }

    async getFotosSegunIdFamilia(idFamilia: number) {
        return this.fotosRepository.find({where: {familiaId: idFamilia}});
    }

    async getFotosSegunNombre(nombre: string) {
        return this.fotosRepository.findOne({where: {nombre}});
    }


    async buscarPorNombreComunNombreCientificoNombredeFoto(query: string) {
        const animal = await this.especieRepository.find({where: {nombre: query}});
        const especie = await this.especieRepository.find({where: {nombreCientifico: query}});
        const foto = await this.fotosRepository.find({where: {nombre: query}});
        return {animal, especie, foto};
    }
}
