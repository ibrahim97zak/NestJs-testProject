/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
import { PaymentModule } from './payment/payment.module';
import { DatabaseModule } from './DB/database.module';


@Module({
  imports: [BookingModule, PaymentModule, DatabaseModule  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
