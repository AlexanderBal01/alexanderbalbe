import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { ProjectEntity } from './project.entity';

@Injectable()
export class ProjectsRepository {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async findAll(): Promise<ProjectEntity[]> {
    const query = `
      SELECT * FROM projects 
      ORDER BY created_at DESC
    `;

    // 2. We geven <ProjectEntity> mee aan de query
    const result = await this.pool.query<ProjectEntity>(query);

    return result.rows;
  }

  async findFeatured(): Promise<ProjectEntity[]> {
    const query = `
      SELECT * FROM projects 
      WHERE is_featured = true
      ORDER BY created_at DESC
    `;

    const result = await this.pool.query<ProjectEntity>(query);

    return result.rows;
  }
}
