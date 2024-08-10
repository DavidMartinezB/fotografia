import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto, CreateEspecieDto, CreateFamiliaDto, CreateFotoDto } from './dto/create-api.dto';
import { Repository } from 'typeorm';
import { Animal, Especie, Familia, Fotos } from './entities/api.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as path from 'path';
import * as fs from 'fs/promises';


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

    async createFoto(createFotoDto: CreateFotoDto): Promise<Fotos> {
        const { imagen, ...fotoData } = createFotoDto;
        const buffer = Buffer.from(imagen.toString(), 'base64');
        const uploadsDir = path.join(__dirname, '..', '..', 'uploads');
        const filePath = path.join(uploadsDir, `${fotoData.nombre}.jpg`);
        
        try {
            // Crear la carpeta 'uploads' si no existe
            await fs.mkdir(uploadsDir, { recursive: true });
        
            // Escribir el archivo en el sistema de archivos
            await fs.writeFile(filePath, buffer);
        
            // Crear la entidad Foto y guardar la ruta de la imagen en la base de datos
            const foto = this.fotosRepository.create({
                ...fotoData,
                imagen: buffer, // Convert the imagen string to a Buffer object
            });
        
            return await this.fotosRepository.save(foto);
        } catch (error) {
            // Manejo de errores
            console.error('Error al crear la foto:', error);
            throw new Error('No se pudo crear la foto');
        }
    }

    async getAnimales() {
        return this.animalRepository.find();
    }

    async deleteFotoPorId(id: number): Promise<void> {
        const result = await this.fotosRepository.delete({ id });
        if (result.affected === 0) {
            throw new NotFoundException('No se encontró la foto para eliminar');
        }
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

    async getFotosSegunIdEspecie(idEspecie: number, page: number, pageSize: number) {
        // Lógica para obtener las fotos de la especie con paginación
        const offset = (page - 1) * pageSize;
        const fotos = await this.findFotosByEspecieId(idEspecie, offset, pageSize);
        return fotos;
    }

    private async findFotosByEspecieId(idEspecie: number, offset: number, limit: number) {
        return this.fotosRepository.find({
            where: { especieId: idEspecie },
            skip: offset,
            take: limit,
          });
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
