import { useForm } from "react-hook-form"
import '../styles/PriceFilter.css'

const PriceFilter = ({setFromTo}) => {

    const { handleSubmit, register, reset } = useForm()

    const submit = data => {
        const from = data.from
        const to = data.to

        setFromTo({
            from: from === '' ? 0 : +from ,
            to: to === '' ? Infinity : Number(to)
    })
    reset({
        from:'',
        to:''
    })
    }

  return (
    <section className="price_filter">
        <h3 className="price_name">Price</h3>
        <form className="price_form" onSubmit={handleSubmit(submit)}>
            <label className="price_label">
                <span className="price_span">From</span>
                <input className="price_input" {...register('from')} type="number" />
            </label>
            <label className="price_label">
                <span className="price_span">To</span>
                <input className="price_input" {...register('to')} type="number" />
            </label>
            <button className="price_btn">Apply</button>
        </form>
    </section>
  )
}

export default PriceFilter