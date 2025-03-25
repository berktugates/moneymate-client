import { useContext, useEffect } from "react";
import { IIncome } from "@/models/IPayment";
import axios from "axios";
import { Alert } from "react-native";
import useAuth from "./useAuth";
import { PaymentContext } from "@/store/context/PaymentContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getToken } from "@/helpers/getToken";

const useIncome = () => {
  const { moneymateUser } = useAuth();
  const { setIncomes, incomes } = useContext(PaymentContext);

  useEffect(() => {
    getIncomes();
  }, []);

  const addIncomes = async (income: IIncome) => {
    try {
      const token = await getToken();
      const response = await axios.post(
        `http://127.0.0.1:1347/api/incomes`,
        {
          userId: moneymateUser.id,
          description: income.source,
          amount: income.amount,
        },
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        Alert.alert("Success.", "Added income successfully.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //filtering by date
  const groupedData = incomes.reduce((acc, item) => {
    const date = item.createdAt.split("T")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  const sectionsIncome = Object.keys(groupedData).map((date) => ({
    title: date,
    data: groupedData[date],
  }));

  const calculateTotalIncomes = incomes.reduce((total: number, i: IIncome) => {
    return total + Number(i.amount);
  }, 0);

  const getIncomes = async () => {
    try {
      const token = await getToken();

      if (!token) {
        console.log("Token not found!");
        return Alert.alert("Error", "Authentication token not found.");
      }

      const response = await axios.get("http://127.0.0.1:1347/api/incomes", {
        headers: {
          "moneymate-auth-token": token,
        },
      });

      if (response.status === 200) {
        setIncomes(response.data.reverse());
      }
    } catch (err) {
      console.log("Error fetching incomes:", err);
    }
  };

  return {
    incomes,
    addIncomes,
    getIncomes,
    sectionsIncome,
    calculateTotalIncomes,
  };
};
export default useIncome;
