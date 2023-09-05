import { createContext, useReducer, useContext } from 'react';
import { initialValue } from '../utils/sorting';

const orderReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

const OrderContext = createContext();

export const useOrderValue = () => {
  const orderAndDispatch = useContext(OrderContext);
  return orderAndDispatch[0];
};

export const useOrderDispatch = () => {
  const orderAndDispatch = useContext(OrderContext);
  return orderAndDispatch[1];
};

export const OrderContextProvider = props => {
  const [order, orderDispatch] = useReducer(orderReducer, initialValue);
  return (
    <OrderContext.Provider value={[order, orderDispatch]}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderContext;
