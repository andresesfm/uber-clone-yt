import { SafeAreaView, StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'

const EatsScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Text>Eat Stuff</Text>
      </View>
    </SafeAreaView>
  )
}

export default EatsScreen

const styles = StyleSheet.create({
  text:{
    color:'blue'
  }
})