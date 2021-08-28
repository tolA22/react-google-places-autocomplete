import React, { Fragment } from 'react'

import { ExampleComponent, PlaceAutocomplete } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.css'
// import { Helmet } from 'react-helmet'
import useGoogleScript from './hooks/useScript'

const App = () => {

  const apiKey = 'XXXXX'
  useGoogleScript(apiKey);
  

  return <Fragment>
    <ExampleComponent text="Create React Library Example 😄" />
    <PlaceAutocomplete/>
  </Fragment>
}

export default App
