import React, { useState } from "react";
import { createContext } from "react";
import { IIncome } from "@/models/IPayment";
import { ISpending } from "@/models/IPayment";

const PaymentContext = createContext();

export const PaymentProvider: React.FC = ({ children }) => {
  const [isSpending, setIsSpending] = useState<boolean>(true);
  const [incomes, setIncomes] = useState<IIncome[]>(
    [
      {
        id:1,
      source: "Write your incomes!",
      amount : 1903,
      date: new Date("2025-02-19")
      },
      {
        id:1,
        source: "Incomes!",
        amount : 38.56,
        date: new Date("2024-12-15")
        },
    ]
  );
  const [spendings, setSpendings] = useState<ISpending[]>([
    {
      id:1,
      name:"Write your spendings!",
      category: "Entartainment",
      company: "Atesoft",
      price: 0.99,
      date: new Date("2024-12-12")
    }
  ]);
  //for filtering
  const [value, setValue] = useState("");
  return (
    <PaymentContext.Provider
      value={{ incomes, setIncomes, spendings, setSpendings, isSpending, setIsSpending, value, setValue }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
export {PaymentContext};

