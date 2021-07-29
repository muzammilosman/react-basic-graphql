import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
import UserList from './Components/UserList';
import './App.css'
import UserForm from './Components/UserForm';

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <UserList />
      <UserForm />
    </ApolloProvider>
  )
}


export default App