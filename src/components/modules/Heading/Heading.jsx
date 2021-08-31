import React from 'react';
import styles from './Heading.module.scss'

export const Heading = (props) => {
  const {
    children
  } = props;

  const level = parseInt(props.level);

  return (
    level === 1 ? <h1 className={`${styles.h1} ${styles.heading}`}>{children}</h1> :
    level === 2 ? <h2 className={`${styles.h2} ${styles.heading}`}>{children}</h2> :
    level === 3 ? <h3 className={`${styles.h3} ${styles.heading}`}>{children}</h3> :
    level === 4 ? <h4 className={`${styles.h4} ${styles.heading}`}>{children}</h4> :
    level === 5 ? <h5 className={`${styles.h5} ${styles.heading}`}>{children}</h5> :
    level === 6 ? <h6 className={`${styles.h6} ${styles.heading}`}>{children}</h6> :
    <h2 className={`${styles.h2} ${styles.heading}`}>{children}</h2>
  )
}