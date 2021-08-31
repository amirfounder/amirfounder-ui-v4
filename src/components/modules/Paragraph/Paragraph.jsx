import React from 'react';
import styles from './Paragraph.module.scss'

export const Paragraph = (props) => {
  const {
    children,
    ...other
  } = props;

  return (
    <p
      className={styles.paragraph}
      {...other}
    >
      {children}
    </p>
  )
}