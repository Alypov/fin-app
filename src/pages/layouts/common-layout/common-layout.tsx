import React from 'react';
import classes from './common-layout.module.scss';
import { Header } from './components/header';

export const CommonLayout = ({ children, rightSection }: any) => {
  const leftSection = <div>LOGO</div>;
 

  return (
    <div className={classes.mainWrapper}>
      <Header leftSection={leftSection} rightSection={rightSection} />
      {children}
    </div>
  );
};
