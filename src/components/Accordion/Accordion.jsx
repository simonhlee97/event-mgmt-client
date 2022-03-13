import styles from './styles.module.css'
import React, { useState, useContext, createContext } from 'react'




const ToggleContext = createContext();
export const Accordion = ({ children, ...restProps }) => {
  return (
    <div {...restProps}>
      <button>{children}</button>
    </div>
  );
}