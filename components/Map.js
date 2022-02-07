import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect,useRef } from 'react';
import tw from 'tailwind-react-native-classnames';
import MapView,{Marker} from 'react-native-maps';
import { useSelector } from 'react-redux';
import { selectOrigin,selectDestination } from '../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from '@env';
import MapViewDirections from 'react-native-maps-directions';
const Map = () => {
   const origin =  useSelector(selectOrigin) || {location:{lat:0,lng:0}};
   const destination = useSelector(selectDestination)  || {location:{lat:20,lng:20}};
   const mapRef =useRef();

   useEffect(()=>{
     if(!origin || !destination) return;
     mapRef.current.fitToSuppliedMarkers(['origin','destination'],{
        edgePadding:{
          top:10,
          right:10,
          bottom:10,
          left:10
        }
     });
   },[origin,destination])
  return (
      <MapView
        ref={mapRef}
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
      origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination = {destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
         />
      )
    }
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
      {
          destination?.location && (
            <Marker
     title='destination'
     description={destination.description || "Hello world"}
        coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
            }}
        identifier={'destination'}
        />
          )
      }
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
