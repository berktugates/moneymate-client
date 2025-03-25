import React, { createContext, useContext, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import useSpending from "@/hooks/useSpending";
import useIncome from "@/hooks/useIncome";
import useCategory from "@/hooks/useCategory";
import { PaymentContext } from "./PaymentContext";

const DataSyncContext = createContext();

export const DataSyncProvider: React.FC = ({ children }) => {
  const { moneymateUser } = useAuth();
  const { incomes, spendings } = useContext(PaymentContext);

  const { getSpendings } = useSpending();
  const { getIncomes } = useIncome();
  const { getCategories, categories } = useCategory();
  useEffect(() => {
    getCategories();
  }, [moneymateUser, categories]);
  useEffect(() => {
    getSpendings();
  }, [moneymateUser, spendings]);
  useEffect(() => {
    getIncomes();
  }, [moneymateUser, incomes]);
  return (
    <DataSyncContext.Provider value={{}}>{children}</DataSyncContext.Provider>
  );
};
export default { DataSyncContext };
