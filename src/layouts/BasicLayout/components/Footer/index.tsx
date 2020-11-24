import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>无锡城东派出所</span>
      <br />
      <span className={styles.copyright}>© 2020-现在 作者:森警院夏凡</span>
    </p>
  );
}