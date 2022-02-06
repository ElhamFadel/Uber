import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView,{Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';
const Map = () => {
   const origin =  useSelector(selectOrigin) || {location:{lat:0,lng:0}};
  return (
      <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
    initialRegion={{
      latitude:origin.location.lat,
      longitude: origin.location.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }}
  >
      {
          origin?.location && (
              <Marker
     title='Origin'
     description={origin.description || "Hello world"}
        coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            }}
        identifier={'origin'}
        />
          )
      }
    
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
