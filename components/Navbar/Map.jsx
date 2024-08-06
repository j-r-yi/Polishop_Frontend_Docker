'use client';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateLocation } from '../../features/features/location.slice';

function UpdateMapView({ latitude, longitude }) {
  const map = useMap();

  useEffect(() => {
    if (latitude && longitude) {
      map.setView([latitude, longitude], map.getZoom());
    }
  }, [latitude, longitude, map]);

  return null;
}

export default function Map() {
  const latitude = useSelector((state) => state.location.latitude);
  const longitude = useSelector((state) => state.location.longitude);
  const dispatch = useDispatch();
  // const defaultCoords = { latitude: 51.505, longitude: -0.09 };
  // const [coords, setCoords] = useState(defaultCoords);
  let coords;

  const getPositionAsync = async function () {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const handleClick = async function () {
    try {
      const position = await getPositionAsync();
      const { latitude, longitude } = position.coords;
      // setCoords({ latitude: latitude, longitude: longitude });
      dispatch(updateLocation({ latitude, longitude }));
      coords = { latitude, longitude };
    } catch (error) {
      alert(`Could not get your current position ${error}`);
    }
  };

  // const { latitude, longitude } = coords;

  useEffect(() => {
    console.log('Updated Coordinates:', { latitude, longitude });
  }, [latitude, longitude]);

  return (
    <div id='map'>
      <div>
        <Button className='border rounded-sm' onClick={handleClick}>
          Your current location
        </Button>
      </div>
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: '300px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <UpdateMapView latitude={latitude} longitude={longitude} />
      </MapContainer>
    </div>
  );
}
