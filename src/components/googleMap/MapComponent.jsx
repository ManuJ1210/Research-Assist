//    import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

//    const MapComponent = () => {
//      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Store your API key in .env file

//      const mapCenter = { lat: 34.0522, lng: -118.2437 }; // Example center coordinates

//      return (
//        <APIProvider apiKey={apiKey}>
//          <Map
//            defaultZoom={10}
//            defaultCenter={mapCenter}
//            style={{ height: '500px', width: '100%' }} // Set map size here
//          >
//            <Marker position={mapCenter} />
//          </Map>
//        </APIProvider>
//      );
//    };
//    export default MapComponent;