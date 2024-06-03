import { useEffect } from "react"
import useFetch from "../../components/hook/useFetch"
import { Map, Marker } from "pigeon-maps"
import '../styles/HotelsMap.css'

const HotelsMap = ({location}) => {

    const url = `postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/hotels?cityId=${location?.cityId}`
    const [hotelLocation, gethotelLocation] = useFetch(url)

    useEffect(() => {
        if(location) {
        gethotelLocation()
    }
       }, [])

  return (
    <div className="location_map">
        {location && (
        <Map defaultCenter={[+location?.lat, +location?.lon]} defaultZoom={10} maxZoom={16} minZoom={6}>
          <Marker width={35} anchor={[+location?.lat, +location?.lon]}/>
        </Map> 
        )}
    </div>
  )
}

export default HotelsMap