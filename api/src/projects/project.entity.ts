export interface ProjectEntity {
  id: number;
  title: string;
  slug: string;
  short_description: string; // Let op: snake_case zoals in DB
  content: string;
  image_url: string | null;
  github_url: string | null;
  live_url: string | null;
  tags: string[]; // Postgres TEXT[] wordt string[]
  is_featured: boolean;
  created_at: Date;
}
