import { Body, Controller, Get, Post } from '@nestjs/common';
import { NavigationService } from './navigation.service';

@Controller('navigation')
export class NaviagtionController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get()
  async getAll() {
    return await this.navigationService.getAllNavigationItems();
  }
}
