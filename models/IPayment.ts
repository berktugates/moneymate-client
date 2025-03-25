export interface ISpending {
  id?:number;
  userId?:number;
  description:string;
  categoryId: number;
  amount: number;
}

export interface IIncome {
  id?:number;
  source: string;
  amount: number;
}

export interface ICategory {
  id?:number;
  userId?:number;
  name:string;
}