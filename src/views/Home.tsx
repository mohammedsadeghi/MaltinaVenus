import React, {FC, useState} from 'react';
import {useQuery} from 'react-query';
import {View, TextInput, StyleSheet, Text, FlatList} from 'react-native';
import {getProducts} from '../services/CrudService';
import Card from '../components/Card';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const fetchProducts = async (): Promise<object[]> => {
    const {products} = await getProducts(searchText).then(res => {
      if (res.status === 202) {
        refetch();
      } else {
        return res.data;
      }
    });

    return products;
  };
  const searchSubmit = () => {
    if (searchText !== '') {
      refetch();
    }
  };
  const {isLoading, error, data, refetch, isFetching} = useQuery(
    'productsData',
    fetchProducts,
    {enabled: false},
  );
  const buttonIcon = (
    <FontAwesome.Button
      name={'remove'}
      color="#dbdbdb"
      backgroundColor="transparent"
    />
  );
  const clearSearchInput = (): void => {
    setSearchText('');
  };
  return (
    <View style={{display: 'flex'}}>
      <View style={styles.topBar}>
        <TextInput
          style={styles.searchInput}
          onChangeText={setSearchText}
          onSubmitEditing={searchSubmit}
          value={searchText}
          placeholder="جستجو"
        />
        <View onTouchEnd={clearSearchInput}>{buttonIcon}</View>
      </View>

      {isFetching ? (
        <View>
          <Text>fetching new data</Text>
        </View>
      ) : (
        <View>
          {data ? (
            <FlatList
              data={data}
              contentContainerStyle={{paddingBottom: 200}}
              renderItem={obj => <Card cardInfo={obj.item} />}
              keyExtractor={(item: any) => item.id}
            />
          ) : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    height: '100%',
    flex: 3,
    textAlign: 'right',
  },

  topBar: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    height: 50,
    paddingBottom: 10,
  },
  buttonContainer: {
    flex: 1,
  },
});
