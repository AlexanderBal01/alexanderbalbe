import { Module } from '@nestjs/common';
import { NaviagtionController } from './navigation.controller';
import { NavigationService } from './navigation.service';
import { NavigationRepository } from './navigation.repository';

@Module({
  controllers: [NaviagtionController],
  providers: [NavigationService, NavigationRepository],
})
export class NavigationModule {}
