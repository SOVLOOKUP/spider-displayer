import React from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

let mydomain = document.domain
const client = new ApolloClient({
  uri: 'http://'+mydomain+':8080/v1/graphql', 
  headers: {
    "content-type":"application/json",
    "x-hasura-admin-secret":"Xiafan123"
  },
  cache: new InMemoryCache()
}); 

function AplProvider(props) {
    const { children } = props;
    return (
        <ApolloProvider client={client}>
            {React.Children.only(children)}
        </ApolloProvider>
    );
  }
  
  export default AplProvider;