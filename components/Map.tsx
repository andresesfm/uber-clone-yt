import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch =useDispatch()
  const mapRef = useRef(null);
  //console.log('origin',origin);
  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    mapRef?.current?.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }

    const getTravelTime = async () => {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${encodeURIComponent(origin.description)}&origins=${encodeURIComponent(destination.description)}&units=imperial&key=${encodeURIComponent(GOOGLE_MAPS_APIKEY)}`
      //console.log(URL);
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        });
    };
    getTravelTime();
    return () => {};
  }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  return (
    <MapView
      ref={mapRef}
      mapType="mutedStandard"
      style={tw`flex-1`}
      initialRegion={{
        latitude: origin?.location.lat ?? 37.78825,
        longitude: origin?.location.lng ?? -122.4324,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}
      {origin?.location && (
        <Marker
          title="Origin"
          description={origin.description}
          identifier="origin"
          coordinate={{
            latitude: origin?.location.lat ?? 37.78825,
            longitude: origin?.location.lng ?? -122.4324,
          }}
        />
      )}
      {destination?.location && (
        <Marker
          title="Destination"
          description={destination.description}
          identifier="destination"
          coordinate={{
            latitude: destination?.location.lat ?? 37.78825,
            longitude: destination?.location.lng ?? -122.4324,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
