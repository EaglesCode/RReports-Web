import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Box, Center, Heading, Text } from "@chakra-ui/react";
type GeoPoint = firebase.firestore.GeoPoint;

const LocationCard = (props: {
  street: string;
  city: string;
  county: string;
  country: string;
  latLng: GeoPoint;
}) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZ3JlZ3p1Y2siLCJhIjoiY2tzcm4wcmFsMG82MTMxbzN2ZWRseWNoMiJ9._tHvw2vGglJF-wqi--3Xvg";
  const mapContainer = useRef(null);
  const [zoom, setZoom] = useState(15);
  const map = useRef(null);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-v9",
      center: [props.latLng.longitude, props.latLng.latitude],
      zoom: zoom,
      interactive: false,
    });
    new mapboxgl.Marker({ color: "red" })
      .setLngLat([props.latLng.longitude, props.latLng.latitude])
      .addTo(map.current);
  });
  return (
    <Center>
      <Box shadow="2xl" borderRadius="xl" p="2">
        <Heading size="lg">
          {props.city}, {props.country}
        </Heading>
        <Text>{props.street}</Text>
        <Box
          ref={mapContainer}
          borderRadius="12"
          minW="45vw"
          minHeight="300px"
        ></Box>
      </Box>
    </Center>
  );
};

export default LocationCard;
