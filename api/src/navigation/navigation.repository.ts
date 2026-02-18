import { Injectable, Inject } from '@nestjs/common';
import { Pool } from 'pg';
import { NavigationEntity } from './navigation.entity';

@Injectable()
export class NavigationRepository {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  async findAll(): Promise<NavigationEntity[]> {
    const query =
      'SELECT id, label, path FROM navigation_items ORDER BY id ASC';
    const result = await this.pool.query(query);

    return result.rows;
  }
}
