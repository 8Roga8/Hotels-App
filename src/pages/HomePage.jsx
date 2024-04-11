import { useSelector } from "react-redux"
import HotelsCard from "../components/HomePage/HotelsCard";
import '../components/styles/HomePage.css'
import { useRef, useState } from "react";
import CategoryFilter from "../components/HomePage/CategoryFilter";
import PriceFilter from "../components/HomePage/PriceFilter";


const HomePage = () => {

    const [inputName, setInputName] = useState('')
    const [fromTo, setFromTo] = useState({
        from: 0,
        to: Infinity
    })

    const hotels = useSelector(states => states.hotels)

    const inputValue = useRef()

    const hadleChange = () => {
        setInputName(inputValue.current.value)
    }

    const cbFilter = hotelInfo => {
        const filterName = hotelInfo.name.toLowerCase()
        .includes(inputName.toLowerCase().trim());

        const price = Number(hotelInfo.price)
        const filterPrice = price >= fromTo.from && price <= fromTo.to
        return filterName && filterPrice;
    }

  return (
    <div className="homePage">
        <aside className="homeFilter_content">
            <h2 className="homeFilter_title">Filters</h2>
            <div className="homeFilter_ForName">
                <h3 className="ForName_title">For name</h3>
                <input className="ForName_input" onChange={hadleChange} value={inputName} ref={inputValue} type="text" />
            </div>
            <PriceFilter 
                setFromTo={setFromTo} />
            <CategoryFilter />
        </aside>
        <div className="homePage_content">
            {
                hotels?.filter(cbFilter).map( hotelsInfo => (
                    <HotelsCard
                    key={hotelsInfo.id}
                    hotel={hotelsInfo}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default HomePage