import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useApolloClient, gql} from '@apollo/client';
import {AllStarshipsResponse} from '../types/starships';
import {ALL_STARSHIPS_QUERY} from '../queries/allStarships';

const App = () => {
  const apolloClient = useApolloClient();

  apolloClient
    .query<AllStarshipsResponse>({
      query: gql`
        ${ALL_STARSHIPS_QUERY}
      `,
    })
    .then(result => console.log(result.data.allStarships));

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
});

export default App;
