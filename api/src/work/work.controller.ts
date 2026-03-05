import { Controller, Get } from '@nestjs/common';
import { WorkService } from './work.service';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get()
  async getAll() {
    return await this.workService.getAllJobs();
  }
}
