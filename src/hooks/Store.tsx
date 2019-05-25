import {createContext} from 'react';

type Action =
  | 'increment'
  | 'decrement'

interface State {
  year: number;
  month: number;
}

const SampleReducer = ({year, month}: State, action: Action) => {
  switch (action) {
    case 'increment':
      return month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 };
    case 'decrement':
      return month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month - 1 };
  }
};

const SampleContext = createContext({
      state: { year: 0, month: 0 },
      dispatch : (action: Action) => {}
});

const InitialValues = (values: {year: number, month: number}) => (values);

export { SampleContext, SampleReducer, InitialValues };
