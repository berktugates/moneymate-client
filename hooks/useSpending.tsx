import { ISpending } from "@/models/IPayment";
import { PaymentContext } from "@/store/context/PaymentContext";
import axios from "axios";
import { useContext, useState } from "react";
import { Alert } from "react-native";
import useAuth from "./useAuth";
import { getToken } from "@/helpers/getToken";

const useSpending = () => {
  const [categoryName, setCategoryName] = useState<string>("");
  const { setSpendings } = useContext(PaymentContext);
  const { moneymateUser } = useAuth();

  const deleteSpending = async (id: number) => {
    const token = await getToken();
    try {
      const response = await axios.delete(
        `http://127.0.0.1:1347/api/spendings/${id}`,
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        Alert.alert("Success", "Spending deleted successfully.");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Spending could not be  deleted.");
    }
  };

  const updateSpending = async (id: number, spending: ISpending) => {
    try {
      const token = await getToken();
      const response = await axios.put(
        `http://127.0.0.1:1347/api/spendings/${id}`,
        {
          userId: moneymateUser.id,
          name: spending.name,
          categoryId: spending.category,
          company: spending.company,
          price: spending.price,
        },
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        await getSpendings();
        Alert.alert("Success", "Spending updated successfull");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Spending could not be  updated.");
    }
  };

  const addSpending = async (spending: ISpending) => {
    try {
      const token = await getToken();
      const response = await axios.post(
        `http://127.0.0.1:1347/api/spendings`,
        {
          userId: moneymateUser.id,
          description: spending.description,
          categoryId: spending.categoryId,
          amount: spending.amount,
        },
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );

      if (response.status === 200) {
        await getSpendings();
        Alert.alert("Success", "Spending added successfully.");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Spending could not be  added.");
    }
  };

  const getSpendings = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`http://127.0.0.1:1347/api/spendings`, {
        headers: {
          "moneymate-auth-token": token,
        },
      });
      if (response.status === 200) {
        setSpendings(response.data);
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Spendings could not be get.");
    }
  };

  return {
    categoryName,
    setCategoryName,
    addSpending,
    getSpendings,
    updateSpending,
    deleteSpending,
  };
};
export default useSpending;
