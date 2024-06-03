import { useForm } from "react-hook-form"
import useCrud from "../hook/useCrud"
import '../styles/ReservationHotel.css'


const ReservationHotel = ({hotelId}) => {
  
  const { handleSubmit, register, reset} = useForm()

  const [,,createBooking] = useCrud()

  const submit = data => {
    const url = 'https://hotels-t8vd.onrender.com/bookings'
    data.hotelId = +hotelId
    createBooking(url, data)
    reset({
      checkIn:'',
      checkOut:''
    })
  }

  return (
    <section className="ReservationHotel">
      <h3 className="ReservationHotel_title">
        Do tou wnat to rrserve this hotel?
        </h3>
      <form className="ReservationHotel_form" onSubmit={handleSubmit(submit)}>
        <label className="ReservationHotel_label">
          <span className="ReservationHotel_span">
            Check-in
            </span>
          <input className="ReservationHotel_input" {...register('checkIn')} type="date"/>       
        </label>
        <label className="ReservationHotel_label">
            <span className="ReservationHotel_span">
              Check-out
              </span>
            <input className="ReservationHotel_input" {...register('checkOut')} type="date"/>
        </label>
        <button className="ReservationHotel_btn">Reserve</button>
      </form>
    </section>
  )
}

export default ReservationHotel