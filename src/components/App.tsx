import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useQuery} from '@apollo/client';
import {AllStarshipsResponse} from '../types/starships';
import {ALL_STARSHIPS_QUERY} from '../queries/allStarships';
import Location from './Location';

const App = () => {
  const {loading, data} = useQuery<AllStarshipsResponse>(ALL_STARSHIPS_QUERY);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.header}>STAR WARS SPACESHIPS</Text>
      <Location />
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={'yellow'}
          style={styles.loadingSpinner}
        />
      ) : (
        <FlatList
          data={data?.allStarships.starships}
          style={styles.starshipList}
          renderItem={({item}) => (
            <View style={styles.listTextContainer}>
              <Text style={styles.listFont}>{item.name}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black'},
  header: {
    alignSelf: 'center',
    color: 'yellow',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  starshipList: {width: '100%'},
  listFont: {
    color: 'yellow',
    fontSize: 20,
  },
  listTextContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  loadingSpinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
