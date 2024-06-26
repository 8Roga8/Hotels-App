import { useEffect, useState } from "react"
import useCrud from "../components/hook/useCrud"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import FormReviews from "../components/ReservationPage/FormReviews"
import '../components/styles/ReservationPage.css'

const ReservationPage = () => {

  const [reserveSelected, setReserveSelected] = useState()
  const [formClose, setFormClose] = useState(true)
    
  const [ bookings, getBookings,,deleteBooking] = useCrud()    

    useEffect(() => {
      const url = 'https://hotels-t8vd.onrender.com/bookings'
      getBookings(url)
    }, [])
    

  return (
    <section className="ReservationPage">
      <FormReviews
        reserveSelected={reserveSelected} 
        setReserveSelected={setReserveSelected}
        formClose={formClose}
        setFormClose={setFormClose}/>
      <h2 className="ReservationPage_title">Reservations</h2>
      <div className="ReservationPage_content">
        {
          bookings?.map(reserve => (
            <ReserveCard 
              key={reserve.id}
              reserve={reserve}
              setReserveSelected={setReserveSelected}
              deleteBooking={deleteBooking}
              setFormClose={setFormClose}/>
          ))
        }
      </div>
    </section>
  )
}

export default ReservationPage