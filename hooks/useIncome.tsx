import React from "react";
import { IIncome } from "@/models/IPayment";

const useIncome:React.FC = () => {

  const groupIncomesByDate = (
    incomes: IIncome[],
    filter: "1month" | "3months" | "6months" = "1month",
    referenceDate: Date = new Date()
  ) => {
    const grouped: { title: string; data: IIncome[] }[] = [];
    const filterDate = new Date(referenceDate);

    if (filter === "3months") {
      filterDate.setMonth(filterDate.getMonth() - 3);
    } else if (filter === "6months") {
      filterDate.setMonth(filterDate.getMonth() - 6);
    } else {
      filterDate.setMonth(filterDate.getMonth() - 1);
    }

    const filteredIncomes = incomes.filter(
      (income) => income.date < referenceDate && income.date >= filterDate
    );

    const dates = Array.from(new Set(filteredIncomes.map(income => income.date.toISOString().split('T')[0])));
    dates.forEach(date => {
      grouped.push({
        title: date,
        data: filteredIncomes.filter(income => income.date.toISOString().split('T')[0] === date)
      });
    });

    return grouped; 
  };

  return {
    groupIncomesByDate
  };
};
export default useIncome;
