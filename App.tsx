import React, {FC} from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import MyStack from './src/navigation/index';

const client = new ApolloClient({
  uri: 'http://192.168.1.168:5000/graphql',
  cache: new InMemoryCache(),
});

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      myOwnColor: string;
    }

    interface Theme {
      myOwnProperty: boolean;
    }
  }
}
const theme = {
  ...DefaultTheme,
  roundness: 2,
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
    myOwnColor: '#BADA55',
  },
};
const App: FC = () => {
  return (
    <PaperProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ApolloProvider>
    </PaperProvider>
  );
};

export default App;
