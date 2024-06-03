import { Link, useParams } from "react-router-dom"
import useFetch from "../components/hook/useFetch"
import { useEffect } from "react"
import OtherHotels from "../components/HotelIdPage/OtherHotels"
import HotelsMap from "../components/HotelIdPage/HotelsMap"
import '../components/styles/HotelsIdPage.css'
import ReservationHotel from "../components/HotelIdPage/ReservationHotel"


const HotelsIdPage = () => {

  const { id } = useParams()

  const url = ` http://localhost:8080/hotels/${id}`
  const [hotel, getHotel] = useFetch(url)

  useEffect(() => {
    getHotel()
  }, [id])
  
    
  return (
    <div className="hotelId">
      <h2 className="hotelId_name">{hotel?.name}</h2>
      <h3 className="hotelId_rating">Rating - {hotel?.rating}</h3>
      <div className="hotelId_location">
        <img className="location_img" src={hotel?.images[0].url} alt="" />
        <div className="hotelIdMap">
        <HotelsMap
          location={hotel}/>
        </div>
      </div>
      <section className="hotelId_content">
        <h3 className="hotelId_name2">{hotel?.city.name}, {hotel?.city.country}</h3>
        <p className="hotelId_address">
          <i className='bx bx-map'></i>  
          <span> {hotel?.address}</span>
        </p>
        <p className="hotelId_description">{hotel?.description}</p>
      </section>
      {
        localStorage.getItem('token')
        ? <ReservationHotel hotelId={hotel?.id} />
        : <h3 className="hotelId_forReserve">If you want to make a reservation, please <Link className="hotelId_login" to='/login'>login</Link> </h3>
      }
      <OtherHotels 
        hotel={hotel}
      />
    </div>
  )
}

export default HotelsIdPage