/* eslint-disable prettier/prettier */
import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly dataSource: DataSource, // Inject the database connection
  ) {}

  async create(createBookingDto: CreateBookingDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const result = await queryRunner.query(
        `INSERT INTO booking (name, date, details) VALUES (?, ?, ?)`,
        [
          createBookingDto.name,
          createBookingDto.date,
          createBookingDto.details,
        ],
      );
      return result;
    } finally {
      await queryRunner.release();
    }
  }

  async findAll() {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const bookings = await queryRunner.query('SELECT * FROM booking');
      return bookings;
    } finally {
      await queryRunner.release();
    }
  }

  async findOne(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const booking = await queryRunner.query(
        'SELECT * FROM booking WHERE id = ?',
        [id],
      );
      return booking[0]; // Return the first result
    } finally {
      await queryRunner.release();
    }
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const result = await queryRunner.query(
        `UPDATE booking SET name = ?, date = ?, details = ? WHERE id = ?`,
        [
          updateBookingDto.name,
          updateBookingDto.date,
          updateBookingDto.details,
          id,
        ],
      );
      return result;
    } finally {
      await queryRunner.release();
    }
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();

    try {
      const result = await queryRunner.query(
        'DELETE FROM booking WHERE id = ?',
        [id],
      );
      return result;
    } finally {
      await queryRunner.release();
    }
  }
}
