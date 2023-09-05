import { createContext, useReducer, useContext } from 'react';

const initialValue = '';

const searchKeywordReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

const SearchKeywordContext = createContext();

export const useSearchKeywordValue = () => {
  const searchKeywordAndDispatch = useContext(SearchKeywordContext);
  return searchKeywordAndDispatch[0];
};

export const useSearchKeywordDispatch = () => {
  const searchKeywordAndDispatch = useContext(SearchKeywordContext);
  return searchKeywordAndDispatch[1];
};

export const SearchKeywordContextProvider = props => {
  const [searchKeyword, searchKeywordDispatch] = useReducer(
    searchKeywordReducer,
    initialValue
  );
  return (
    <SearchKeywordContext.Provider
      value={[searchKeyword, searchKeywordDispatch]}
    >
      {props.children}
    </SearchKeywordContext.Provider>
  );
};

export default SearchKeywordContext;
