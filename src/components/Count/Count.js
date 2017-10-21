import React from 'react';
import { connect } from 'dva';
import s from './Count.css';

function Count(props) {
  return (
    <div className={s.count}>
      <h2>{props.count}</h2>
      <div className={s.button}>
        <button key="add" onClick={() => props.dispatch({ type: 'count/add' })}>+</button>
        <button key="minus" onClick={() => props.dispatch({ type: 'count/minus' })}>-</button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ count }) => ({
  count
});

export default connect(mapStateToProps)(Count);

