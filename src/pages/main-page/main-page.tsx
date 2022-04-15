import { UserInfoBar } from 'pages/layouts/common-layout/components';
import React, { useState } from 'react';
import { CommonLayout } from 'pages/layouts';
import classes from './main-page.module.scss';
export const MainPage = () => {
  const [user, setUser] = useState<any>({ id: 2 });

  //TODO: Fetch balance from the backend
  const balance = { current: 17000, initial: 20000 };

  const rightSection = <UserInfoBar user={user.id} />;

  return (
    <CommonLayout rightSection={rightSection}>
      <div className={classes.main}>
        <div className={classes.balanceWrapper}>
          <div className={classes.balanceTitle}>Balance</div>
          <div className={classes.initialBalanceWrapper}>{`Initial: ${balance.initial}`}</div>
          <div className={classes.currentBalanceWrapper}>{`Current: ${balance.current}`}</div>
        </div>
        <div className={classes.dataMainWrapper}>
          <div className={classes.tableHeaderWrapper}>
            <div>Category</div>
            <div>Budget</div>
            <div>Rest</div>

          </div>
        </div>
      </div>
    </CommonLayout>
  );
};
