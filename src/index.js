import React, { useEffect } from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const useGoogleScript = (props) => {
  const defaultProps = {
    id:"autocomplete",
    ...props
  }
   const {apiKey, id} = defaultProps;

   

  useEffect(()=>{
      const url = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initAutocomplete`
      const script = document.createElement('script')
      script.src = url;
      script.async = true;
      script.defer = true
      document.body.appendChild(script);
      
          window.initAutocomplete = initAutocomplete
          let autocomplete
          function initAutocomplete(){
          
              autocomplete = new window.google.maps.places.Autocomplete(
                  document.getElementById(id),{
                      types:['establishment'],
                      componentRestrictions:{'country':['AU']},
                      fields: ['place_id','geometry','name']
                  }
              );
      
              autocomplete.addListener('place_changed', onPlaceChanged)
          }
      
          function onPlaceChanged(){
              var place = autocomplete.getPlace();
      
              if(!place.geometry){
                  //User did not select a prediction; reset the input field
                  document.getElementById('autocomplete').placeholder = 'Enter a place';
              }else{
                  document.getElementById('details').innerHTML = place.name;
              }
          }
          
      return () => {
          document.body.removeChild(script)
      }

  },[apiKey])
}