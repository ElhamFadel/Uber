import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
const data = [
{
    id:"1230",
    icon:"home",
    location:"Home",
    description:"Code Street, London, UK",
},
{
    id:"123",
    icon:"work",
    location:"Home",
    description:"Code Street, London, UK",
}
]
const NavFavourites = () => {
  return (
    <FlatList data={data}
    ItemSeparatorComponent={()=>(
      <View style={[tw`bg-gray-200`],{height:0.5}} />
    )
    }
     keyExtractor={(item) => item.id} renderItem={({item:{location,description,icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
             <Icon 
             style={tw`mr-8 rounded-full bg-gray-300 p-3`}
             name={icon}
             color="white"
              size={18}
              />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{description}</Text>
        </View>
        </TouchableOpacity>
    )
    }/>
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
