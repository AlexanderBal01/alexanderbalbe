import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { WorkEntity } from './work.entity';

@Injectable()
export class WorkRepository {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async findAll(): Promise<WorkEntity[]> {
    const query = `
      SELECT * FROM work_experience 
      ORDER BY end_date DESC
    `;

    // 2. We geven <ProjectEntity> mee aan de query
    const result = await this.pool.query<WorkEntity>(query);

    return result.rows;
  }
}
