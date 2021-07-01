import React, {FC} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MyStack from './src/navigation/index';

const client = new ApolloClient({
  uri: 'http://192.168.1.168:5000/graphql',
  cache: new InMemoryCache(),
});

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
