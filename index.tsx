import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import {ApolloProvider} from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache(),
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => Root);
