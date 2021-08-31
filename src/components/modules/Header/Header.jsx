import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

export const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <Link className={styles.link} to="/">Amir Sharapov</Link>
      </div>
      <div className={styles.column}>
        <Link className={styles.link} to="/about">About</Link>
        <Link className={styles.link} to="/contact">Contact</Link>
      </div>
    </div>
  )
}