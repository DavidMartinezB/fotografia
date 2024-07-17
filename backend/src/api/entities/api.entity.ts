import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";


@Entity()
export class Animal {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string;
    
    @OneToMany(() => Familia, familia => familia.animal)
    familias: Familia[];
}

@Entity()
export class Familia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  animal_id: number;

  @ManyToOne(() => Animal, animal => animal.familias)
  animal: Animal;

  @OneToMany(() => Especie, especie => especie.familia)
  especies: Especie[];
}

@Entity()
export class Especie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  nombre_cientifico: string;

  @Column()
  familia_id: number;

  @ManyToOne(() => Familia, familia => familia.especies)
  familia: Familia;
}

@Entity()
export class Fotos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  animal_id: number;

  @Column()
  familia_id: number;

  @Column()
  especie_id: number;

  @Column()
  fecha: Date;

  @Column()
  url: string;

  @ManyToOne(() => Animal)
  animal: Animal;

  @ManyToOne(() => Familia)
  familia: Familia;

  @ManyToOne(() => Especie)
  especie: Especie;
}