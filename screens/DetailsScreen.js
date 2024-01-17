import React, { useRef, useState } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


function DetailsScreen({route, navigation}) {
    const { text, info2 } = route.params;
    const mapRef = useRef(null);
    const [markerPosition, setMarkerPosition] = useState(null);

    const setMark = async () => {
        console.log("Hola");
        if (mapRef.current) {
          const camera = await mapRef.current.getCamera();
          console.log("Latitud:", camera.center.latitude);
          console.log("Longitud:", camera.center.longitude);
          setMarkerPosition({ latitude: camera.center.latitude, longitude: camera.center.longitude });
    
        }
      };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Button
            title="Set Mark"
            onPress={setMark}
            />
             <MapView ref={mapRef} style={styles.map} mapType='satellite'>
                {markerPosition && (
                <Marker coordinate={markerPosition} title="Marcador" description="Este es el centro del mapa" />
                )}
            </MapView>
            <Text>Find Barcelona</Text>
        </View>
        
    );
}

  export default DetailsScreen;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '80%',
      height: '50%',
    },
  });