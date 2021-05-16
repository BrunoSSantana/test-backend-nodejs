import { v4 as uuidv4 } from "uuid";

class Product {
  id?: string;
  title: string;
  description: string;
  price: number;
  category: string;
  user: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
