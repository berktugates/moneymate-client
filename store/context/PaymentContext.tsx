import React, { useState } from "react";
import { createContext } from "react";
import { ICategory, IIncome } from "@/models/IPayment";
import { ISpending } from "@/models/IPayment";

const PaymentContext = createContext();

export const PaymentProvider: React.FC = ({ children }) => {
  const [isSpending, setIsSpending] = useState<boolean>(true);
  const [incomes, setIncomes] = useState<IIncome[]>([]);
  const [spendings, setSpendings] = useState<ISpending[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  //for date filtering
  const [value, setValue] = useState("");
  return (
    <PaymentContext.Provider
      value={{
        incomes,
        setIncomes,
        spendings,
        setSpendings,
        isSpending,
        setIsSpending,
        value,
        setValue,
        categories,
        setCategories,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};
export { PaymentContext };
