import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'

const NavFavourites = () => {
    const data=[
        {
            id:"123",
            icon:"home",
            location:'Home',
            destination:'Code Street, London, UK'
        },
        {
            id:"456",
            icon:"briefcase",
            location:'Work',
            destination:'London Eye, London, UK'
        }
    ]

  return (
    <FlatList data={data} keyExtractor={(item)=>item.id}
    renderItem={({item:{id,location,destination,icon}})=>{
        //console.log(item);
     return(
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}}
    ItemSeparatorComponent={()=>(
    <View style={[tw`bg-gray-200`,{height:1}]}/>)}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})