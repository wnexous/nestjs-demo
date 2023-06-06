import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuarios {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ width: 32 })
  phone: number;

  @CreateDateColumn({ name: 'create_at' })
  createAt: string;

  @UpdateDateColumn({ name: 'update_at' })
  updateAt: string;

  @DeleteDateColumn({ name: 'delete_at' })
  deleteAt: string;
}
