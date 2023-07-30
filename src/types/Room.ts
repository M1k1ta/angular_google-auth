export interface Room {
  id: number;
  name: string;
  autorEmail: string;
  errors?: {
    status?: string;
  }
}
