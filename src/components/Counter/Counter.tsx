import React from 'react'
import { Buttons} from '../../atoms/Buttons/Buttons';
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { decrement, increment } from '../../lib/slices/appSlice';
import Styled from './CounterStyle';

 const Counter: React.FC = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <Buttons
          onClick={() => dispatch(increment())}
          color="secondary"
          type="contained"
        >
          Increment
        </Buttons>
        <Styled.Span>{count}</Styled.Span>
        <Buttons
          onClick={() => dispatch(decrement())}
          color="primary"
          type="contained"
        >
          Decrement
        </Buttons>
      </div>
    </div>
  )
}

export default Counter;