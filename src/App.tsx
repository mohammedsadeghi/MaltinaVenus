import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import store from './store/store';
import {Home} from './views/Home';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaView>
          <View>
            <Home />
          </View>
        </SafeAreaView>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
