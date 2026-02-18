import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  async getAll() {
    return await this.projectsService.getAllProjects();
  }
}
