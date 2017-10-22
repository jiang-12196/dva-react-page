import React from 'react';
import { connect } from 'dva';
import styles from './Count.css'
import CountComponent from '../components/Count/Count'
import MainLayout from '../components/MainLayout/MainLayout'

function Count(props) {
  return (
    <MainLayout location={props.location}>
      <div className={styles.normal}>
        <CountComponent count={props.count} />
      </div>
    </MainLayout>
  );
}

export default connect()(Count);
