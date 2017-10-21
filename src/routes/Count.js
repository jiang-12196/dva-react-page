import React from 'react';
import { connect } from 'dva';
import styles from './Count.css'
import CountComponent from '../components/Count/Count'

function Count() {
  return (
    <div className={styles.normal}>
      <CountComponent />
    </div>
  );
}

export default connect()(Count);
