import React, {useContext} from 'react';
import {SampleContext} from '../hooks/Store';

const Sample: React.FC = () => {
  const {state, dispatch} = useContext(SampleContext);

  return (
    <>
      <h1>sample</h1>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      <p>
        <button onClick={() => dispatch('decrement')}>-</button>
        <button onClick={() => dispatch('increment')}>+</button>
      </p>
    </>
  );
};

export default Sample;
