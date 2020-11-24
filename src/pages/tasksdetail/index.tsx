import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import TaskDetailTable from './components/TaskDetail'
import PageHeader from '@/components/PageHeader';

const { Cell } = ResponsiveGrid;

const TaskDetails = () => {
  return (
    <ResponsiveGrid gap={20}>
      <Cell colSpan={12}>
        <PageHeader
          title="任务管理"
          breadcrumbs={[{ name: '任务中心' },{ name: '任务反馈' }]}
          description='查看已推送任务反馈情况。'
        />
    </Cell>
      <Cell colSpan={12}>
        <TaskDetailTable/>
      </Cell>
    </ResponsiveGrid>
  );
};

export default TaskDetails;
