import React from 'react';
import { Platform } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


const GPSLocation = {
    async getLocationAsync() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
             return 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!';
        } else {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                return 'Permission to access location was denied';
            }
            return await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.BestForNavigation, maximumAge : 15000});
        }    
    }
}

export default GPSLocation;
  