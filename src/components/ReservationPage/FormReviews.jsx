import { useForm } from "react-hook-form"
import useCrud from "../hook/useCrud"
import '../styles/FormReviews.css'

const FormReviews = ({reserveSelected,  setReserveSelected, formClose,setFormClose}) => {

    const {handleSubmit, register, reset} = useForm()

    const [,,createReview] = useCrud()

    const submit = data => {
        const url = 'https://hotels-t8vd.onrender.com/reviews'
        data.hotelId = reserveSelected?.hotel.id
        data.rating = +data.rating
        createReview(url, data)
        setReserveSelected()
        reset({
            rating: '',
            comment: ''
        }
    )
    setFormClose(true)
    }

    const handleFormclose = () => {
        setFormClose(true)
        reset({
            rating: '',
            comment: ''
        }
    )
    }

  return (
    <div className= {`Reviews_content ${formClose && 'Reviews_close'}`} >
        <article className="Reviews">
        <div onClick={handleFormclose} className="Reviews_x">x</div>
            <h3 className="Reviews_title">Reserve</h3>
            <section className="Reviews_info">
                <header className="Reviews_info_header"> 
                    <img className="Reviews_info_img" src={reserveSelected?.hotel.images[0].url} alt="" />
                </header>
                <h4 className="Reviews_info_name" >{reserveSelected?.hotel.name}</h4>
                <p className="Reviews_info_city" >{reserveSelected?.hotel.city.name},{" "} {reserveSelected?.hotel.city.country}</p>
                <ul className="Reviews_info_list">
                    <li className="Reviews_info_cost">
                        <span className="Reviews_info_span">Reservation Days</span> 
                        <span className="Reviews_info_value">{reserveSelected?.reservationDays}</span>
                    </li>
                    <li className="Reviews_info_cost">
                    <span className="Reviews_info_span">Subtotal Price</span>
                    <span className="Reviews_info_value">${reserveSelected?.subtotal}</span>
                    </li>
                </ul>
            </section>
            <form className="Reviews_form" onSubmit={handleSubmit(submit)}>
            <label className="Reviews_label">
                    <span className="Reviews_label_span">Rating</span>
                    <select className="Reviews_label_selec"  {...register('rating')}>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                    </select>
                </label>
                <label className="Reviews_label">
                    <span className="Reviews_label_span">Comments</span>
                    <textarea className="Reviews_label_selec2" {...register('comment')} />
                </label>
                <button className="Reviews_btn">Comment</button>
            </form>
        </article>
    </div>
  )
}

export default FormReviews