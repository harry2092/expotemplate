import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObjectLike } from '@helpers/global';

export const addStoreDataAsync = async (key: string, value: string): Promise<void> => {

  try {

    if (isObjectLike(value)) {

      value = JSON.stringify(value);
    
    }
    await AsyncStorage.setItem(key.toString(), value);  
  
  } catch (e) {
    // saving error
  }

};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
/**
 * Retrieves data from AsyncStorage based on the provided key.
 * 
 * @param key - The key to retrieve the data from AsyncStorage.
 * @returns A promise that resolves to the retrieved data, or an empty string if the data is not found or an error occurs.
 */
export const getStoreDataAsync = async (key: string):Promise<any> => {

  try {

    const value = await AsyncStorage.getItem(key.toString());
    if (value !== null) {

      return JSON.parse(value);
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};

/**
 * Retrieves a string value from the storage based on the provided key.
 * @param key - The key used to retrieve the value from the storage.
 * @returns A promise that resolves to the retrieved string value, or an empty string if the value is not found or an error occurs.
 */
export const getStoreStringAsync = async (key: string):Promise<string> => {

  try {

    const value = await AsyncStorage.getItem(key.toString());
    if (value !== null) {

      return value;
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};

/**
 * Removes the data associated with the specified key from the storage.
 * 
 * @param key - The key of the data to be removed.
 * @returns A Promise that resolves when the data is successfully removed.
 */
export const removeStoreDataAsync = async (key: string):Promise<void> => {

  try {

    await AsyncStorage.removeItem(key.toString());
  
  } catch (exception) {

    console.error('error');
  
  }

};
