import React from 'react'
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 33.745,
    lng: -117.523
};


const position = { lat: 33.772, lng: -117.214 };

const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15
};

function MapContainer() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD0sMYn0mNvs6r2xpDyDGe7sOg1mtoD0E8"
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        //const bounds = new window.google.maps.LatLngBounds(center);
        //map.fitBounds(bounds);
        map.setZoom(10);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <>
                <Marker
                    position={position}
                />
                <InfoWindow
                    position={position}
                >
                    <div style={divStyle}>
                        <h1>InfoWindow</h1>
                    </div>
                </InfoWindow>
            </>
        </GoogleMap>
    ) : <></>
}

export default React.memo(MapContainer)















/*
import React from 'react';
import {GoogleMap, LoadScript, InfoWindow} from "@react-google-maps/api";

const mapStyles = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

const position = { lat: -3.616, lng: -37.214 };

const divStyle = {
    background: `black`,
    border: `1px solid #ccc`,
    padding: 15
}

class MapContainer extends React.Component {
    render() {
        return(
            <LoadScript googleMapsApiKey="AIzaSyD0sMYn0mNvs6r2xpDyDGe7sOg1mtoD0E8">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    center={center}
                    zoom={10}
                >
                    <InfoWindow
                        position={position}
                    >
                        <div className="info">
                            <h1>InfoWindow</h1>
                        </div>
                    </InfoWindow>

                </GoogleMap>

            </LoadScript>
        );
    }
}

export default MapContainer
*/