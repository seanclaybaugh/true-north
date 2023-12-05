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

const App = () => {
  const {loading, data} = useQuery<AllStarshipsResponse>(ALL_STARSHIPS_QUERY);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.header}>STAR WARS SPACESHIPS</Text>
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={'yellow'}
          style={styles.loadingSpinner}
        />
      ) : (
        <FlatList
          data={data?.allStarships.starships}
          renderItem={({item}) => (
            <View>
              <Text style={{color: 'yellow'}}>{item.name}</Text>
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
  starshipList: {},
  loadingSpinner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
