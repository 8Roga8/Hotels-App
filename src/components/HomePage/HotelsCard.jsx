import { useNavigate } from "react-router-dom"
import '../styles/HotelsCard.css'

const HotelsCard = ({ hotel }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/hotels/${hotel.id}`)
    }

  return (
    <article className="hotelCard"> 
        <header className="hotelCard_header">
            <img className="hotelCard_img" src={hotel.images[0].url} alt="" />
        </header>
        <section className="hotelCard_content">
            <h3 className="hotelCard_name">{hotel.name}</h3>
            <p className="hotelCard_rating">{hotel.rating} <span>Reating</span></p>
            <span className="hotelCard_location">{hotel.city.name}, {hotel.city.country}</span>
            <div className="hotelCard_price">$ {hotel.price}</div>
            <footer className="hotelCard_footer">
                <button className="hotelCard_bnt" onClick={handleClick}>See more...</button>
            </footer>
        </section>
    </article>
  )
}

export default HotelsCard