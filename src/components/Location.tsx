import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

const Location = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`You are XX miles from Starwars land`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  text: {
    color: 'yellow',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Location;
