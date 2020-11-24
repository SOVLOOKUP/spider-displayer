import { useQuery, gql, useLazyQuery } from '@apollo/client';

const getdata = (offset:number = 0,limit:number = 10) => useQuery(gql`
  query MyQuery($offset: Int!,$limit: Int!) {
    spider_aggregate {
      aggregate {
        count
      }
    }
    spider(offset: $offset, limit: $limit, order_by: {created_at: desc}) {
      id
      title
      url
      created_at
    }
  }`,{
    variables: { 
      offset: offset,
      limit: limit
    },
  });

const getdetaildata = () => useLazyQuery(gql`
query MyQuery($id: uuid!) {
  spider(where: {id: {_eq: $id}}) {
    id
    title
    url
    created_at
    content
    imgurl
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