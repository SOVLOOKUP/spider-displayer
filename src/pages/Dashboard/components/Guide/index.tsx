import * as React from 'react';
import { Button } from '@alifd/next';
import styles from './index.module.scss';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h2 >欢迎来到微信公众号任务推送平台</h2>

      <p className={styles.description}>项目完善阶段，欢迎向作者（805408477@qq.com）吐槽!</p>


      <div className={styles.action}>
      
        <a
          href="https://github.com/sovlookup"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Button type="secondary" size="large">
            作者的GitHub
          </Button> */}
        </a>
      </div>
    </div>
  );
};

export default Guide;
