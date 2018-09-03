export interface Epic {
  id: number;
  name: string;
  notes: string;
  priority: number;
  estimatedDuration: number;
  done: boolean;
}
