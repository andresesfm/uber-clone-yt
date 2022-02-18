import { SafeAreaView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NavigateCard from '../components/NavigateCard'
import RideOptionsCard from '../components/RideOptionsCard'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const Stack = createNativeStackNavigator()
  const navigation = useNavigation()
  return (
    <View style={tw`bg-white h-full`}>
      <TouchableOpacity 
      style={tw`absolute top-16 bg-gray-100 left-8 z-50 p-3 rounded-full shadow-lg`}
      onPress={()=>{navigation.navigate('HomeScreen')}}>
        <Icon name='menu' />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen name='NavigateCard' component={NavigateCard} options={{headerShown:false}}/>
          <Stack.Screen name='RideOptionsCard' component={RideOptionsCard} options={{headerShown:false}}/>
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({
  text:{
    color:'blue'
  }
})