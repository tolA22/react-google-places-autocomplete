import { useEffect, useState } from "react";


const useGoogleScript = (apiKey) => {
   

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
                    document.getElementById('autocomplete'),{
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

export default useGoogleScript;