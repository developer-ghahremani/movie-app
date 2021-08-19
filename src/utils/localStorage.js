import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveToLocalStorage = (localStorageKey, value) =>
  AsyncStorage.setItem(localStorageKey, JSON.stringify(value));

export const removeFromLocalStorage = (localStorageKey) =>
  AsyncStorage.removeItem(localStorageKey);

export const getLocalStorage = (localStorageKey) =>
  new Promise(async (resolve, reject) => {
    try {
      const data = await AsyncStorage.getItem(localStorageKey);
      resolve(JSON.parse(data));
    } catch (error) {
      reject(error);
    }
  });
