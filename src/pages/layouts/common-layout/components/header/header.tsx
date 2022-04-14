import React from 'react'
import classes from './header.module.scss';
import { HeaderTypes } from '../types';


export const Header = ({leftSection, rightSection}: HeaderTypes) => {
  return (
    <div className={classes.mainWrapper}>
        <div className={classes.leftSection}>
            {leftSection}
        </div>
        <div className={classes.rightSection}>
            {rightSection}
        </div>
    </div>
  )
}

