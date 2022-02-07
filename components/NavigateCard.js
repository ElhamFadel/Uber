import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import {setDestination} from "../slices/navSlice"
import {GOOGLE_MAPS_APIKEY} from '@env';

const NavigateCard = () => {
  const dipatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
       <Text style={tw`text-center py-5 text-xl`}>Hello Elham</Text>
       <View style={tw`border-t border-gray-200 flex-shrink`}>
           <View>
             <GooglePlacesAutocomplete 
                placeholder='Where To?'
                nearbyPlacesAPI='GooglePlacesSearch'
                styles={toInputBoxStyles}
                fetchDetails={true}
                enablePoweredByContainer={false}
                nearbyPlacesAPI='GooglePlacesSearch'
                minLength={2}
                returnKeyType={'search'}
                onPress={(data, details = null) => {
                  dipatch(setDestination({
                    location:details.geometry.location,
                    description:data.description
                  }))
                }}
                debounce={400}
                query={{
                  key:GOOGLE_MAPS_APIKEY,
                  language:'en',
                }}
                 />
           </View>
       </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor:"#fff",
        paddingTop:20,
        flex:0,
    },
    textInput: {
        backgroundColor:"#DDDDDF",
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer: {
      paddingHorizontal:20,
      paddingBottom:0,
    }

        

});
