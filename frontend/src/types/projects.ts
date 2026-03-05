export interface Project {
  id: number;
  title: string;
  slug: string;
  short_description: string;
  content: string;
  image_url: string | null;
  github_url: string;
  live_url: string | null;
  tags: string[];
  is_featured: boolean;
  created_at: string;
}
