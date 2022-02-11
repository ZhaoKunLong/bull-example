import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { NOTE_QUEUE } from '../constants';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';

@Module({
  imports: [
    BullModule.registerQueue({ name: NOTE_QUEUE}),
  ],
  controllers: [AudioController],
  providers: [AudioProcessor],
})
export class AudioModule { }