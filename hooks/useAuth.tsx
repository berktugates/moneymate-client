import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAuth = ()=>{
   useEffect(()=>{
        getUserInfo()
    },[])
    const [moneymateUser,setMoneymateUser] = useState(null);
    const getUserData = async(id:string)=>{
        try{
            const response = await axios.get(`http://127.0.0.1:1347/api/users/${id}`);
            if(response.status === 200){
                setMoneymateUser(response.data);
            }
        }catch(err){
            console.log(err);
        }
    }

    const getUserInfo = async()=>{
        try{
          const user = await AsyncStorage.getItem("moneymate-user-info");
          if(user){
            const userData = JSON.parse(user) as { id: string };
            const {id} = userData;
            getUserData(id);
          }else{
            console.log("No user data found.");
            Alert.alert("Error", "Please try again.");
          }
        }catch(err){
          console.log(err);
        }
      }

      const logOut = async()=>{
        try{
            const response = await axios.post(`http://127.0.0.1:1347/api/users/logout`);
            if(response.status === 200){
                await AsyncStorage.removeItem("moneymate-user-info");
                setMoneymateUser(null);
                router.navigate("/SignIn");
            }
            else{
                console.warn("Could not log out.");
                Alert.alert("Error", "Could not log out. Please try again.");
            }
        }catch(err){
            console.log(err);
        }
      }

      const deleteAccount = async(id:string)=>{
        try{
            const response = await axios.delete(`http://127.0.0.1:1347/api/users/${id}`);
            if(response.status === 200){
                console.log("User deleted successfully.");
                router.navigate("/SignIn");
            }else{
                console.log("Could not delete user.");
                Alert.alert("Error", "Your account could not be deleted. Please try again.");
            }
        }catch(err){
            console.log(err);
        }
      }

    return {
        moneymateUser,
        getUserInfo,
        logOut,
        deleteAccount
    }
}

export default useAuth;