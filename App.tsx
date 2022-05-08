import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView>
        <View>
          <Text>hi</Text>
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;
