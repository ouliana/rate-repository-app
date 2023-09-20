import { createContext, useReducer, useContext } from 'react';
import * as Localization from 'expo-localization';

const localeReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

const initialValue = Localization.locale;

const LocaleContext = createContext();

export const useLocaleValue = () => {
  const localeAndDispatch = useContext(LocaleContext);
  return localeAndDispatch[0];
};

export const useLocaleDispatch = () => {
  const localeAndDispatch = useContext(LocaleContext);
  return localeAndDispatch[1];
};

export const LocaleContextProvider = props => {
  const [locale, localeDispatch] = useReducer(localeReducer, initialValue);
  return (
    <LocaleContext.Provider value={[locale, localeDispatch]}>
      {props.children}
    </LocaleContext.Provider>
  );
};

export default LocaleContext;
