import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UserComponent from '../components/Users/Users'

function Users() {
  return (
    <div className={styles.normal}>
    <UserComponent />
    </div>
  );
}

export default connect()(Users);
