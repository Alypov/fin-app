import React from 'react';
import classes from './common-layout.module.scss';
export const CommonLayout = ({ children }: any) => {
  return (
    <div className={classes.mainWrapper}>
      CommonLayout
      {children}
    </div>
  );
};
