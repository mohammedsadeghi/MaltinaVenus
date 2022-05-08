import React, {FC, useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const Home: FC = () => {
  const [searchText, setSearchText] = useState<string>('');
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
    <View style={styles.topBar}>
      <TextInput
        style={styles.searchInput}
        onChangeText={setSearchText}
        value={searchText}
        placeholder="جستجو"
      />
      <View onTouchEnd={clearSearchInput}>{buttonIcon}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    // height: 40,
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
