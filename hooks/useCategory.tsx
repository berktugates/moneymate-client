import { useContext } from "react";
import { Alert } from "react-native";
import axios from "axios";
import useAuth from "./useAuth";
import { ICategory } from "@/models/IPayment";
import { getToken } from "@/helpers/getToken";
import { PaymentContext } from "@/store/context/PaymentContext";

const useCategory = () => {
  const { moneymateUser } = useAuth();
  const { setCategories } = useContext(PaymentContext);
  
  const deleteCategory = async (id: number) => {
    try {
      const token = await getToken();

      const response = await axios.delete(
        `http://127.0.0.1:1347/api/categories/${id}`,
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        Alert.alert("Success", "Category deleted successfully.");
      }
    } catch (err) {
      Alert.alert("Error", "Category could not be deleted.");
      console.log(err);
    }
  };

  const updateCategory = async (id: number, category: ICategory) => {
    try {
      const token = await getToken();
      const response = await axios.put(
        `http://127.0.0.1:1347/api/categories/${id}`,
        {
          userId: moneymateUser?.id,
          name: category.name,
        },
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        Alert.alert("Success", "Category updated successfully.");
      }
    } catch (err) {
      Alert.alert("Error", "Category could not be updated.");
    }
  };

  const addCategory = async (category: ICategory) => {
    try {
      const token = await getToken();

      const response = await axios.post(
        `http://127.0.0.1:1347/api/categories`,
        {
          userId: moneymateUser?.id,
          name: category.name,
        },
        {
          headers: {
            "moneymate-auth-token": token,
          },
        }
      );
      if (response.status === 200) {
        Alert.alert("Success", "Category added successfully.");
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Category could not be added.");
    }
  };

  const getCategories = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`http://127.0.0.1:1347/api/categories`, {
        headers: {
          "moneymate-auth-token": token,
        },
      });
      if (response.status === 200) {
        setCategories(response.data);
      }
    } catch (err) {
      console.log(err);
      Alert.alert("Error", "Categories could not be get.");
    }
  };
  return {
    getCategories,
    addCategory,
    updateCategory,
    deleteCategory,
  };
};
export default useCategory;
