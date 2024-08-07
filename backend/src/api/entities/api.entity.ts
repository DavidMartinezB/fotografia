import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";


@Entity({name: 'Animal'})
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @OneToMany(() => Familia, Familia => Familia.Animal)
    Familias: Familia[];
}

@Entity({name: 'Familia'})
export class Familia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  animalId: number;

  @ManyToOne(() => Animal, Animal => Animal.Familias)
  Animal: Animal;

  @OneToMany(() => Especie, Especie => Especie.Familia)
  Especies: Especie[];
}

@Entity({name: 'Especie'})
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nombreCientifico: string;

  @Column()
  familiaId: number;

  @ManyToOne(() => Familia, Familia => Familia.Especies)
  Familia: Familia;
}

@Entity({name: 'Fotos'})
export class Fotos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  animalId: number;

  @Column()
  familiaId: number;

  @Column()
  especieId: number;

  @Column()
  fecha: Date;

  @Column()
  imagen: Buffer;

  @ManyToOne(() => Animal)
  Animal: Animal;

  @ManyToOne(() => Familia)
  Familia: Familia;

  @ManyToOne(() => Especie)
  Especie: Especie;
}