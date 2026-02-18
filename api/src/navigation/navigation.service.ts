import { Injectable } from '@nestjs/common';
import { NavigationRepository } from './navigation.repository';

@Injectable()
export class NavigationService {
  constructor(private readonly navigationRepository: NavigationRepository) {}

  async getAllNavigationItems() {
    return await this.navigationRepository.findAll();
  }
}
