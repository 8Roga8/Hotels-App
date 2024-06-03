import { useEffect } from "react"
import useFetch from "../hook/useFetch"
import HotelsCard from "../HomePage/HotelsCard"
import '../styles/OtherHotels.css'

const OtherHotels = ({hotel}) => {

const url = `postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/hotels?cityId=${hotel?.cityId}`
const [hotelsInCity, getHotelsInCity] = useFetch(url)

   useEffect(() => {
    if(hotel) {
    getHotelsInCity()
}
   }, [hotel])

   console.log(hotelsInCity);

  return (
    <section className="otherHotels">
        <h3 className="otherhotels_in">Other hotels in 
        <span className="otherhotels_city"> {hotel?.city.name}</span> </h3>
        <div className="otherHotels_Card">
            {
                hotelsInCity?.map(hotelInfo => (
                    <HotelsCard 
                        key={hotelInfo.id}
                        hotel={hotelInfo}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default OtherHotels