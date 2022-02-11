import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { NOTE_QUEUE, QUEUE_NAME } from '../constants';

@Processor(NOTE_QUEUE)
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @Process(QUEUE_NAME.PENDING)
  handlePending(job: Job): void {
    this.logger.debug(`JobID is ${job.id}`)
    this.logger.debug('Start pending...');
    this.logger.debug(job.data);
    this.logger.debug('pending completed');    
  }

  @Process(QUEUE_NAME.ACCEPTED)
  handleAccepted(job: Job): void {
    this.logger.debug(`JobID is ${job.id}`)
    this.logger.debug('Start accepted...');
    this.logger.debug(job.data);
    this.logger.debug('accepted completed');
  }

  @Process(QUEUE_NAME.FINISHED)
  handleFinished(job: Job): void {
    this.logger.debug(`JobID is ${job.id}`)
    this.logger.debug('Start finished...');
    this.logger.debug(job.data);
    this.logger.debug('finished completed');
  }
}