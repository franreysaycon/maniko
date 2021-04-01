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
    case 'track.create': {
      return {
        ...state,
        track: action.payload.track,
      };
    }
    case 'track.update': {
      return {
        ...state,
        track: {
          ...state.track,
          ...action.payload,
        },
      };
    }
    case 'track.delete': {
      return {
        ...state,
        track: {},
      };
    }
    case 'template.create': {
      return {
        ...state,
        template: action.payload.template,
      };
    }
    default:
      return state;
  }
};

const prepopulateStore = () => {
  if (typeof window === 'undefined') {
    return {};
  }

  return JSON.parse(localStorage.getItem('store')) || {
    track: {},
    template: {},
  };
};

const persistStore = (store) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('store', JSON.stringify(store));
  }
};

const calculateInitialTrack = (transactions, o15thSalary, o30thSalary) => {
  const result = {
    after15thSalary: +o15thSalary,
    after30thSalary: +o30thSalary,
  };

  transactions.forEach((trans) => {
    if (trans.schedule === SCHEDULE.after15th) {
      result.after15thSalary -= +trans.value;
    } else if (trans.schedule === SCHEDULE.after30th) {
      result.after30thSalary -= +trans.value;
    }
  });

  return result;
};

const ManikoProvider = ({ children }) => {
  const [store, dispatch] = useReducer(ManikoReducer, prepopulateStore());
  const firstMount = useRef(false);
  const trackIsReady = !!store?.track?.month && !!store?.track?.year;
  const templateIsReady = !!store?.template?.id;

  useEffect(() => {
    if (firstMount.current) {
      persistStore(store);
    } else {
      firstMount.current = true;
    }
  }, [store]);

  const createTrack = (month, year) => {
    const template = store?.template;
    const entry = {
      ...template,
      ...calculateInitialTrack(
        template.transactions,
        template.after15thSalary,
        template.after30thSalary,
      ),
      id: uuidv4(),
      original15th: template.after15thSalary,
      original30th: template.after30thSalary,
      month,
      year,
    };

    dispatch({
      type: 'track.create',
      payload: {
        track: entry,
      },
    });
  };

  const createTemplate = (template) => {
    const entry = {
      id: uuidv4(),
      ...template,
    };

    dispatch({
      type: 'template.create',
      payload: {
        template: entry,
      },
    });
  };

  const deleteTrack = () => {
    dispatch({
      type: 'track.delete',
    });
  };

  const createTransaction = (transaction) => {
    const entry = {
      id: uuidv4(),
      ...transaction,
    };

    const { after15thSalary, after30thSalary } = store.track;

    dispatch({
      type: 'track.update',
      payload: {
        transactions: [entry, ...store.track.transactions],
        after15thSalary: transaction.schedule === SCHEDULE.after15th
          ? after15thSalary - transaction.value : after15thSalary,
        after30thSalary: transaction.schedule === SCHEDULE.after30th
          ? after30thSalary - transaction.value : after30thSalary,
      },
    });
  };

  const deleteTransaction = (id) => {
    const transaction = store.track.transactions.find((tmp) => tmp.id === id);
    const { after15thSalary, after30thSalary } = store.track;

    dispatch({
      type: 'track.update',
      payload: {
        transactions: store.track.transactions.filter((trans) => trans.id !== id),
        after15thSalary: transaction.schedule === SCHEDULE.after15th
          ? after15thSalary + transaction.value : after15thSalary,
        after30thSalary: transaction.schedule === SCHEDULE.after30th
          ? after30thSalary + transaction.value : after30thSalary,
      },
    });
  };

  const deleteTemplate = (id) => {
    dispatch({
      type: 'template.delete',
      payload: {
        templateId: id,
      },
    });
  };

  return (
    <ManikoContext.Provider value={{
      ...store,
      createTemplate,
      createTrack,
      createTransaction,
      deleteTransaction,
      deleteTemplate,
      deleteTrack,
      trackIsReady,
      templateIsReady,
    }}
    >
      {children}
    </ManikoContext.Provider>
  );
};

export const useManikoStore = () => useContext(ManikoContext);

export default ManikoProvider;
