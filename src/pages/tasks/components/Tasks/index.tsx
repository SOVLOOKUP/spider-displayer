import React from 'react'
import { getdata, getdetaildata } from './data';
import { Link } from 'react-router-dom';
import { Button, Field, Table, Card, Pagination, Icon, List, Collapse, Divider, Dialog } from '@alifd/next';
import { PaginatedResult } from 'ahooks/lib/useFusionTable';
import styles from './index.module.scss';
import { useBoolean, useSetState } from 'ahooks';
import useUrlState from '@ahooksjs/use-url-state';
import { resultKeyNameFromField } from '@apollo/client/utilities';
import { Typography } from '@alifd/next';
import Img from '@icedesign/img';

const { H1, H2, Paragraph, Text } = Typography;

interface ColumnWidth {
  id: number;
  title: number;
  // content: number;
  url: number;
  created_at: number;
};

interface Prop {
  pagesize: number;
};

export interface Result<Item> extends Omit<PaginatedResult<Item>, 'tableProps'> {
  paginationProps: {
    onChange: (current: number) => void;
    onPageSizeChange: (size: number) => void;
    current: number;
    pageSize: number;
    total: number;
  };
  tableProps: {
    dataSource: Item[];
    loading: boolean;
    onSort: (dataIndex: String, order: String) => void;
    onFilter: (filterParams: Object) => void;
  };
  search: {
    type: 'simple' | 'advance';
    changeType: () => void;
    submit: () => void;
    reset: () => void;
  };
}

const columnWidth: ColumnWidth = {
  id: 150,
  title: 150,
  url: 150,
  created_at: 180,
};

const cellOperation = (...args: any[]): React.ReactNode => {
  console.log(args)
  const url = "/tasks/detail/" + args[0][2].id
  return (
    <div>
      {/* <Link to={url} >
        <Button
          text
          type="primary"
          // todo link to iddetailpage
          onClick={() => { console.log(args[0][2].id) }}
        >
          反馈
            </Button>
      </Link>
        &nbsp;|&nbsp; */}
      <Button
        text
        type="primary"
        onClick={() => {
          console.log(args[0][2].id)
          // setdeatilData
          args[2](
            {
              variables: {
                id: args[0][2].id,
              },
            }
          )

          // toggle
          args[1]()
        }}
      >
        详情
            </Button>
    </div>
  );
};

type detaildata = {
  content: string
  created_at: number
  url:string
  title: string
  imgurl:string
  id: string
}

type resultData = {
  spider: Array<detaildata>
}

type result = {
  loading: boolean
  data: resultData
}

const DetailDialog: React.Fc = (props: { visible: any; onclose: any; result: result; }) => {
  const { visible, onclose, result } = props

  if (result.loading) return <p>Loading...</p>;

  try {
    let data = result.data.spider[0]

    const commonProps = {
      // 超链接到url
      title: 
      <a href={data.url}> <Button text type="primary">{data.title}</Button> </a>
     ,
      // style: { width: 300 },
      subTitle: data.created_at,
    };

    return (
      <Dialog title="记录详情"
        visible={visible}
        // width="auto"
        closeable={true}
        onClose={onclose}
        onOk={onclose}
        footerActions={['ok']}
        shouldUpdatePosition={true}

      >
        <Card free>
          <Card.Content>
            <Card free>
              <Card.Header {...commonProps} />
              <Card.Divider />
              <Card.Content>
                <H2>图片</H2>
                <Paragraph>
                <Img
                  style={{
                    verticalAlign: 'middle',
                  }}
                  src={data.imgurl}
                />
                  
                </Paragraph>

                <H2>内容</H2>
                <Paragraph>
                  {data.content}
                </Paragraph>

              </Card.Content>

            </Card>



          </Card.Content>
        </Card>
      </Dialog>
    )
  } catch (error) {
    return <div></div>
  }



}

const DispatchTaskTable: React.Fc = () => {

  const { loading, error, data, fetchMore } = getdata()
  const [visible, { toggle, setTrue, setFalse }] = useBoolean(false)
  let [getddata, result] = getdetaildata()
  // const [detaildata, setData] = useSetState();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data)
  // todo
  const sort = (dataIndex: String, order: String) => undefined
  const filter = (filterParams: Object) => undefined
  const tableProps = {
    dataSource: data.spider,
    loading: loading,
    onSort: sort,
    onFilter: filter,
  }

  const loadMore = () => {
    fetchMore({
      variables: { offset: data.spider.length },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) { return previousResult; }
        return Object.assign({}, previousResult, {
          // 将新的 feed 结果追加到旧的 feed 结果
          spider: [...previousResult.spider, ...fetchMoreResult.spider],
        });
      },
    })
  }
  // const onPageSizeChange = (size: number) => undefined

  // const paginationProps = {
  //   onChange: onchange,
  //   onPageSizeChange: onPageSizeChange,
  //   current: 1,
  //   pageSize: pagesize,
  //   total: data.spider_aggregate.aggregate.count,
  // }

  console.log(data.spider)
  return (
    <div classID={styles.container}>
      <Card free>
        <Card.Content>
          <Table
            {...tableProps}
            primaryKey="id"
          >
            <Table.Column title="ID" dataIndex="id" resizable width={columnWidth.id} />
            <Table.Column title="标题" dataIndex="title" resizable width={columnWidth.title} />
            <Table.Column title="链接地址" dataIndex="url" resizable width={columnWidth.url} />
            <Table.Column title="收录时间" dataIndex="created_at" resizable width={columnWidth.created_at} />
            <Table.Column title="查看" resizable width={columnWidth.created_at} cell={(...args) => (cellOperation(args, toggle, getddata))} />
          </Table>
          <br />
            显示{data.spider.length}/{data.spider_aggregate.aggregate.count}条记录
            <Card.Content >
            <Button type="primary" onClick={loadMore}>加载更多</Button>
          </Card.Content>

        </Card.Content>
      </Card>
      <DetailDialog visible={visible} onclose={setFalse} result={result} />
    </div>
  )
}

export default DispatchTaskTable