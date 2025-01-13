/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { DatabaseModule } from '../DB/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BookingController],
  providers: [BookingService],
})
export class BookingModule {}
