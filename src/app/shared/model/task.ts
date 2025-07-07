export class Task {
  id: number | null = null;
  title: string;
  description: string | null = null;
  status: boolean = false;

  constructor(title: string, description?: string) {
    this.title = title;
    this.description = description || null;
  }
}
