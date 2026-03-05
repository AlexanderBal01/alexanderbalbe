export interface WorkEntity {
  id: number;
  company_name: string;
  position: string;
  description?: string;
  start_date: Date;
  end_date?: Date;
  skills?: string[];
  logo_url?: string;
  created_at: Date;
}
