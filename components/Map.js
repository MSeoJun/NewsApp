import React from "react";
import MapView from "react-native-maps";

function Maps() {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.4948374212982,
        longitude: 126.73714377398,
        latitudeDelta: 0.009,
        longitudeDelta: 0.004,
      }}
    >
      <MapView.Marker
        coordinate={{
          latitude: 37.4948374212982,
          longitude: 126.73714377398,
        }}
      />
    </MapView>
  );
}

export default Maps;
