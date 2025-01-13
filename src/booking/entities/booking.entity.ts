/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('booking') // Specify table name
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ type: 'date' }) // Store date in a proper format
  date: string;

  @Column('text', { nullable: true }) // Optional description field
  details: string;

  @Column({ length: 255, nullable: true }) // Optional filename field
  filename: string;

  @Column({ length: 255, nullable: true }) // Optional owner field
  owner: string;

  @Column({ default: false }) // Default value for isPublished
  isPublished: boolean;
}
