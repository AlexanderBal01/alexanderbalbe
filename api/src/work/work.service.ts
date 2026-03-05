import { Injectable } from '@nestjs/common';
import { WorkRepository } from './work.repository';

@Injectable()
export class WorkService {
  constructor(private readonly workRepository: WorkRepository) {}

  async getAllJobs() {
    return await this.workRepository.findAll();
  }
}
