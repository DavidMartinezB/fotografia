import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Animal, Especie, Familia, Fotos } from './entities/api.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Animal,
      Especie,
      Familia,
      Fotos
    ]),
  ],
  controllers: [ApiController],
  providers: [ApiService],
})
export class ApiModule {}
