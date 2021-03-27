import React, {
  createContext, useContext, useEffect, useReducer, useRef,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

const ManikoContext = createContext();

const SCHEDULE = {
  after15th: '15th',
  after30th: '30th',
};

const ManikoReducer = (state, action) => {
  switch (action.type) {
    case 'track.update':
      return {
        ...state,
        month: action.payload.month,
        year: action.payload.year,
        after15thSalary: action.payload.after15thSalary,
        after30thSalary: action.payload.after30thSalary,
      };
    case 'transactions.add': {
      const { transaction } = action.payload;
      const { template } = action.payload;

      const newState = {
        ...state,
        after15thSalary:
            transaction.schedule === SCHEDULE.after15th
              ? state.after15thSalary - transaction.value : state.after15thSalary,
        after30thSalary:
            transaction.schedule === SCHEDULE.after30th
              ? state.after30thSalary - transaction.value : state.after30thSalary,
        transactions: state.transactions ? [transaction, ...state.transactions] : [transaction],
      };
      if (template) {
        newState.templates = state.templates ? [template, ...state.templates] : [template];
      }
      return newState;
    }
    case 'track.clear':
      return {};
    default:
      return state;
  }
};

const prepopulateStore = () => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('store')) || {};
  }
  return {};
};

const persistStore = (store) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('store', JSON.stringify(store));
  }
};

const ManikoProvider = ({ children }) => {
  const [store, dispatch] = useReducer(ManikoReducer, prepopulateStore());
  const firstMount = useRef(false);
  const trackIsReady = !!store.month && !!store.year;

  useEffect(() => {
    if (firstMount.current) {
      persistStore(store);
    } else {
      firstMount.current = true;
    }
  }, [store]);

  const clearTrack = () => {
    dispatch({
      type: 'track.clear',
    });
  };

  const updateTrack = (payload) => {
    dispatch({
      type: 'track.update',
      payload,
    });
  };

  const updateTransactions = (transaction) => {
    const entry = {
      id: uuidv4(),
      ...transaction,
    };

    const payload = {
      transaction: entry,
    };

    if (transaction.isTemplate) {
      payload.template = entry;
    }

    dispatch({
      type: 'transactions.add',
      payload,
    });
  };

  return (
    <ManikoContext.Provider value={{
      ...store, updateTrack, updateTransactions, clearTrack, trackIsReady,
    }}
    >
      {children}
    </ManikoContext.Provider>
  );
};

export const useManikoStore = () => useContext(ManikoContext);

export default ManikoProvider;
