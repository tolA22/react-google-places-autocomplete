import React, { Fragment } from 'react'

import { ExampleComponent, useGoogleScript } from 'react-google-places-autocomplete'
import 'react-google-places-autocomplete/dist/index.css'

const App = () => {

  const apiKey = 'XXXXXX'
  const id="autocomplete"
  useGoogleScript({apiKey,id});
  

  return <Fragment>
    <ExampleComponent text="Create React Library Example 😄" />
    <input id={id}/>
  </Fragment>
}

export default App
