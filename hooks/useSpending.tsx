import { IIncome, ISpending } from "@/models/IPayment";
import { useState } from "react";

const useSpending = () => {
  const [categoryName, setCategoryName] = useState<string>("");

  const groupByDate = (
    spendings: ISpending[],
    filter: "1month" | "3months" | "6months" = "1month",
    referenceDate: Date = new Date()
  ) => {
    const grouped: { title: string; data: ISpending[] }[] = [];
    const filterDate = new Date(referenceDate);

    if (filter === "3months") {
      filterDate.setMonth(filterDate.getMonth() - 3);
    } else if (filter === "6months") {
      filterDate.setMonth(filterDate.getMonth() - 6);
    } else {
      filterDate.setMonth(filterDate.getMonth() - 1);
    }

    // filteredSpendings&Incomes
    const filteredSpendings = spendings.filter(
      (spending) =>
        spending.date < referenceDate &&
        spending.date >= filterDate &&
        (categoryName === "" || spending.category === categoryName) // categoryName'e göre filtreleme
    );

    filteredSpendings.forEach((spending) => {
      const date = spending.date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      const existingGroup = grouped.find((group) => group.title === date);

      if (existingGroup) {
        existingGroup.data.push(spending);
      } else {
        grouped.push({ title: date, data: [spending] });
      }
    });

    return grouped;
  };

  const totalTransactions = (
    transactions: ISpending[] | IIncome[],
    filter: "1month" | "3months" | "6months" = "1month",
    referenceDate: Date = new Date()
  ) => {
    const filterDate = new Date(referenceDate);

    if (filter === "3months") {
      filterDate.setMonth(filterDate.getMonth() - 3);
    } else if (filter === "6months") {
      filterDate.setMonth(filterDate.getMonth() - 6);
    } else {
      filterDate.setMonth(filterDate.getMonth() - 1);
    }

    const filteredTransactions = transactions.filter(
      (transaction) =>
        transaction.date >= filterDate && transaction.date < referenceDate
    );

    return filteredTransactions.reduce((total, num) => {
      if ("price" in num) {
        return total + num.price;
      } else if ("amount" in num) {
        return total + num.amount;
      }
      return total;
    }, 0);
  };

  return {
    groupByDate,
    totalTransactions,
    categoryName,
    setCategoryName,
  };
};
export default useSpending;
