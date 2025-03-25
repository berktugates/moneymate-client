import AsyncStorage from "@react-native-async-storage/async-storage";

export const getToken = async () => {
    const userInfo = await AsyncStorage.getItem("moneymate-user-info");
    return userInfo ? JSON.parse(userInfo).token : null;
  };