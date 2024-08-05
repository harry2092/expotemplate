import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import LocalizedStrings from 'react-native-localization';
import { addStoreDataAsync, getStoreDataAsync } from '@helpers/storage';

export const DEFAULT_LANGUAGE = 'en';

// Load localization files
export const localization = new LocalizedStrings({
  en: require('./langFiles/en.json'),
  fr: require('./langFiles/fr.json'),
});

// Define the shape of the context
interface LocalizationContextType {
  localization: typeof localization;
  setAppLanguage: (language: string) => void;
  appLanguage: string;
  initializeAppLanguage: () => void;
}

// Create the context with a default value
export const LocalizationContext = createContext<LocalizationContextType>({
  localization,
  setAppLanguage: () => {},
  appLanguage: DEFAULT_LANGUAGE,
  initializeAppLanguage: () => {},
});

// Define props for the provider
interface LocalizationProviderProps {
  children: ReactNode;
}

// Create the provider component
export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  const [appLanguage, setAppLanguage] = useState(DEFAULT_LANGUAGE);

  const setLanguage = (language: string) => {
    localization.setLanguage(language);
    setAppLanguage(language);
    addStoreDataAsync('language', language);
  };

  const initializeAppLanguage = async () => {
    const currentLanguage = await getStoreDataAsync('language');
    setLanguage(currentLanguage ?? 'en');
  };

  useEffect(() => {
    initializeAppLanguage();
  }, []);

  return (
    <LocalizationContext.Provider
      value={{
        localization,
        setAppLanguage: setLanguage,
        appLanguage,
        initializeAppLanguage,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};

// Custom hook to use localization context
export const useLocalization = () => useContext(LocalizationContext);
