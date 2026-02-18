import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { NavigationModule } from './navigation/navigation.module';

@Module({
  imports: [DatabaseModule, NavigationModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
