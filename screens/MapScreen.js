import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from "tailwind-react-native-classnames"
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  return (
      <SafeAreaView>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard}  options={{
           headerShown:false
          }}/>
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard}  options={{
           headerShown:false
          }}/>
        </Stack.Navigator>
       </View>
      </SafeAreaView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
