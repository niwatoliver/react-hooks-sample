import React, {useEffect, useState, useContext, createContext, useRef} from 'react';
import {SampleContext} from '../hooks/Store';

const MyContext = createContext(() => {});

const Home: React.FC = () => {
  const {state, dispatch} = useContext(SampleContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    // クリーンアップ関数を返す
    return () => clearTimeout(timerId);
  }, [count]);


  const inputEl = useRef<HTMLInputElement>(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    if(inputEl && inputEl.current) {
      inputEl.current.focus();
      console.log(inputEl.current.value)
    }
  };

  return (
    <>
      <p>
        time: <b>{count}</b>
      </p>
      <p>
        <b>
          {state.year}年{state.month}ヶ月
        </b>
      </p>
      <p>
        <button onClick={() => dispatch('decrement')}>-</button>
        <button onClick={() => dispatch('increment')}>+</button>
      </p>
      <MyContext.Provider value={() => setCount(count => count + 1)}>
        <IncrementButton />
      </MyContext.Provider>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

const IncrementButton = () => {
  const incrementHandler = useContext(MyContext);

  return (
    <p>
      <button onClick={incrementHandler}>+</button>
    </p>
  );
};

export default Home;
