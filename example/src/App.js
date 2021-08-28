import React, { Fragment } from 'react'

import { ExampleComponent, PlaceAutocomplete } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.css'
// import { Helmet } from 'react-helmet'
import useGoogleScript from './hooks/useScript'

const App = () => {

  const apiKey = 'AIzaSyCAUBAsDOcwwDCH3E63VAQ7W8Vn8iKcg18'
  useGoogleScript(apiKey);
  

  return <Fragment>
    {/* <Helmet>
    <script async
    src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`}>
</script>
    </Helmet> */}
    <ExampleComponent text="Create React Library Example 😄" />
    <PlaceAutocomplete/>
    <div id="details"></div>
    <div id="map"></div>
  </Fragment>
}

export default App
