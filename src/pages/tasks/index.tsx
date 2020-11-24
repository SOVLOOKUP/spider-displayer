import React from 'react';
import PageHeader from '@/components/PageHeader';
import { ResponsiveGrid } from '@alifd/next';
import DispathTaskTable from './components/Tasks'

const { Cell } = ResponsiveGrid;

const Tasks = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="信息管理"
          breadcrumbs={[{ name: '信息中心' }]}
          description='查看已爬取的信息。'
        />
      </Cell>

      <Cell colSpan={12}>
        <DispathTaskTable/>
      </Cell>
    </ResponsiveGrid>
  );
};

export default Tasks;
