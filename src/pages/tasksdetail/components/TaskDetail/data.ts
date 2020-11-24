import { useQuery, gql, useLazyQuery } from '@apollo/client';

const getdata = (id: number, offset: number = 0, limit: number = 20) => useQuery(gql`
query MyQuery($offset: Int!,$limit: Int!,$id: Int!) {
  wxpolice_wx_collects(offset: $offset, limit: $limit,where: {task_id: {_eq: $id}},order_by: {id: desc}) {
    id
    submiter_name
    submit_time
    status
  }
  wxpolice_wx_collects_aggregate(where: {task_id: {_eq: $id}}) {
    aggregate {
      count
    }
  }
}`, {
  variables: {
    offset: offset,
    limit: limit,
    id: id
  },
});

const getdetaildata = () => useLazyQuery(gql`
query MyQuery($id: Int!) {
  wxpolice_wx_collects(where: {id: {_eq: $id}}) {
    content
    id
    status
    submit_time
    submiter_name
    submiter_uid
    task_id
  }
}`);
// const lazygetdata = (offset:number = 0,limit:number = 10) => useLazyQuery(gql`
//   query MyQuery($offset: Int!,$limit: Int!) {
//     wxpolice_wx_tasks_aggregate {
//       aggregate {
//         count
//       }
//     }
//     wxpolice_wx_tasks(offset: $offset, limit: $limit) {
//       id
//       task_name
//       target
//       dispatch_time
//       deadline
//     }
//   }`,{
//     variables: { 
//       offset: offset,
//       limit: limit
//     },
// });

// let getCount = () => useQuery(gql`
//   query MyQuery($offset: Int!,$limit: Int!) {
//     wxpolice_wx_tasks_aggregate {
//       aggregate {
//         count
//       }
//     }
//   }`);

export { getdata,getdetaildata }