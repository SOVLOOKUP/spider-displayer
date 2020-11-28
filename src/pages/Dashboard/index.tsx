import React from 'react';
import { Card, ResponsiveGrid } from '@alifd/next';
import Guide from './components/Guide';
import PageHeader from '@/components/PageHeader';
import styles from './index.module.scss';
const { Cell } = ResponsiveGrid;

const Dashboard = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="DashBoard"
          breadcrumbs={[]}
        />
      </Cell>
      <Cell colSpan={12}>
      <Card free>
      <Card.Header title={""} />
      <Card.Divider />
      <Card.Content style={{ margin: 0, padding: 0 }}>
        <ResponsiveGrid>
          <Cell colSpan={12}>
          <div className={styles.container}>
            <br/>
            <br/>
            <br/>
            <h2 >欢迎来到图片爬虫信息平台</h2>

            <p className={styles.description}></p>


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
            <br/>
            <br/>
          </div>
          </Cell>
        </ResponsiveGrid>
      </Card.Content>
    </Card>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Dashboard;
