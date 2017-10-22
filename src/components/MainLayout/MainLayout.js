import React from 'react';
import s from './MainLayout.css';
import Header from './Header';

function MainLayout({ children, location }) {
  return (
    <div className={s.normal}>
      <Header location={ location }/>
      <div className={s.content}>
        <div className={s.main}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
