import React from 'react';
import classes from './user-info-bar.module.scss';
import { UserInfoTypes } from '../types';

export const UserInfoBar = ({ user }: UserInfoTypes) => {
  return (
    <div className={classes.main}>
      <div>Hi, {user}</div>
      <div>Log out</div>
    </div>
  );
};
