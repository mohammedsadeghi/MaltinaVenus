import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Home} from './views/Home';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <View>
          <Home />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
