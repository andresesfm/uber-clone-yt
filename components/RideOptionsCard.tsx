import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";

import 'intl';
import 'intl/locale-data/jsonp/en'; 

const RideOptionsCard = () => {
  const data = [
    {
      id: "x-123",
      title: "UberX",
      multiplier: 1,
      image: "https://links.papareact.com/3pn",
    },
    {
      id: "xl-123",
      title: "Uber XL",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8",
    },
    {
      id: "lux-123",
      title: "Uber LUX",
      multiplier: 1.75,
      image: "https://links.papareact.com/7pf",
    },
  ];
  const navigation = useNavigation();
  const [selected, setSelected] = useState<any | null>(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  const SURGE_CHARGE_RATE=1.5;
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => {
            navigation.navigate("NavigateCard");
          }}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-0 text-xl`}>Select a ride - {travelTimeInformation?.distance?.text}</Text>
      </View>
      <FlatList
        style={tw``}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, multiplier, title, image } ,item}) => (
          <TouchableOpacity 
            onPress={()=>{setSelected(item)}}
          style={tw`flex-row justify-between items-center px-10 ${id=== selected?.id && 'bg-gray-200'}`}>
            <Image
              style={[{height:90,width:90,resizeMode:'contain'}]}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('en-us',{
                style:'currency',
                currency:'USD',
              }).format(SURGE_CHARGE_RATE
              * travelTimeInformation.duration.value* multiplier/100)}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} 
        style={tw`bg-black py-2 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected? selected.title: 'a car'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
