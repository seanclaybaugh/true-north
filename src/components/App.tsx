import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {useApolloClient, gql} from '@apollo/client';
import {AllStarshipsResponse, Starship} from '../types/starships';
import {ALL_STARSHIPS_QUERY} from '../queries/allStarships';

const App = () => {
  const apolloClient = useApolloClient();
  const [starships, setStarships] = useState<Starship[]>([]);

  apolloClient
    .query<AllStarshipsResponse>({
      query: gql`
        ${ALL_STARSHIPS_QUERY}
      `,
    })
    .then(({data}) => {
      console.log(data.allStarships.starships);
      setStarships(data.allStarships.starships);
    });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <FlatList
        data={starships}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
  starshipList: {},
});

export default App;
