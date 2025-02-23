export interface ISpending {
  id:number;
  name: string;
  category: string;
  company?: string;
  price: number;
  date: Date;
}

export interface IIncome {
  id:number;
  source: string;
  amount: number;
  date: Date;
}
