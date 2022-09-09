import { Entity,Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('temps')
export class Temps {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'varchar',length:100,nullable:false})
    nom_period:string;

    @Column({type:'varchar',length:100,nullable:false})
    date:Date;

    @Column({type:'varchar',length:100,nullable:false})
    temps_deb:String;

    @Column({type:'varchar',length:100,nullable:false})
    temps_fin:string;

   
}
export class CreateTemps {
    nom_period:string;
    date:Date;
    temps_deb:String;
    temps_fin:string;

  }
  
  export default CreateTemps;