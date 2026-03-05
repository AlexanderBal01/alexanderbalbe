import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjectsModule } from './projects/projects.module';
import { NavigationModule } from './navigation/navigation.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [DatabaseModule, NavigationModule, ProjectsModule, WorkModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
