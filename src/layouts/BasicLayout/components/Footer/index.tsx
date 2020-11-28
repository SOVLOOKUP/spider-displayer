import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>南京森林警察学院</span>
      <br />
      <span className={styles.copyright}>© 2020-现在 作者:SOVLOOKUP&安伟</span>
    </p>
  );
}