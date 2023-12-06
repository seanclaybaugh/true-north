import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

const Location = () => {
  const [distance, setDistance] = useState<Number>(0);
  useEffect(() => {
    checkAndRequestLocationPermission();
  }, []);

  const checkAndRequestLocationPermission = async () => {
    try {
      let result;
      if (Platform.OS === 'ios') {
        result = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else if (Platform.OS === 'android') {
        result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }
      if (result !== RESULTS.GRANTED) {
        await requestLocationPermission();
      } else {
        //get location
        //calculate distance
        //set result
      }
    } catch (error) {
      console.error('Error checking location permission:', error);
    }
  };

  const requestLocationPermission = async () => {
    try {
      let result;
      if (Platform.OS === 'ios') {
        result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      } else if (Platform.OS === 'android') {
        result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      }

      if (result === RESULTS.GRANTED) {
        //get location
        //calculate distance
        //set result
      } else {
        Alert.alert(
          'Permission Denied',
          'You have denied location permission. Some features may not work properly.',
          [{text: 'OK'}],
        );
      }
    } catch (error) {
      console.error('Error requesting location permission:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={
          styles.text
        }>{`You are ${distance} miles from Starwars land`}</Text>
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
