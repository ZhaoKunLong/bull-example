import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';
import { nanoid } from 'nanoid';
import { NOTE_QUEUE, QUEUE_NAME } from '../constants';

@Controller('add-job-queue')
export class AudioController {
  constructor(
    @InjectQueue(NOTE_QUEUE)
    private readonly audioQueue: Queue
  ) { }

  @Post()
  async addJobToQueue() {
    //  pend 
    const delayList: number[] = [1, 2, 3]
    const jobId =  nanoid()
    const obj = {
      file: 'audio.mp3',
    }
    await this.audioQueue.add(QUEUE_NAME.PENDING, obj, {
      jobId: `${jobId}_1`,
      removeOnComplete: true,
      delay: delayList[0] * 60 * 1000,
    });

    await this.audioQueue.add(QUEUE_NAME.ACCEPTED, obj, {
      jobId: `${jobId}_2`,
      removeOnComplete: true,
      delay: delayList[1] * 60 * 1000,
    });

    await this.audioQueue.add(QUEUE_NAME.FINISHED, obj, {
      jobId: `${jobId}_3`,
      removeOnComplete: true,
      delay: delayList[2] * 60 * 1000,
    });
  }
}
