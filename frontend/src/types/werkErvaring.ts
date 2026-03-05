export interface Ervaring {
  id: number;
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string | null; // null als je er nog steeds werkt
  skills: string[];
  logo_url: string | null;
  created_at: string;
}
