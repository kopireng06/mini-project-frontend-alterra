import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    split
  } from "@apollo/client";
  import { WebSocketLink } from '@apollo/client/link/ws';
  import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new WebSocketLink({
    uri: 'wss://capital-lemur-76.hasura.app/v1/graphql',
    options: {
      reconnect: true,
      connectionParams:{
        headers:{
          "headers":"application/json",
          "x-hasura-admin-secret":"ibuF1nRw55kYyKOex1VoyufV0f2bulXabxdifFcz1ec1ov6sstiCXzxi1icmhKi3"
        }
      }
    }
});
  
const httpLink = new HttpLink({
    uri: 'https://capital-lemur-76.hasura.app/v1/graphql',
    headers:{
        "headers":"application/json",
        "x-hasura-admin-secret":"ibuF1nRw55kYyKOex1VoyufV0f2bulXabxdifFcz1ec1ov6sstiCXzxi1icmhKi3"
    }
});
  
const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);
  
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link:splitLink
});

export default client;