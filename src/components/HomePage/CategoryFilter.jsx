import { useEffect } from "react"
import useFetch from "../hook/useFetch"
import { getHotelsThunk } from "../../store/slices/hotels.slice"
import { useDispatch } from 'react-redux'
import '../styles/CategoryFilter.css'


const CategoryFilter = () => {

    

    const url = 'postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities();
    }, [])

   const dispatch = useDispatch()

    const handleFilterCities = (id) => {
        let  url

        if (id) {
            url = `postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/hotels?cityId=${id}`
        } 
        else {
            url = 'postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/hotels'
        }

        dispatch(getHotelsThunk(url))
    }

  return (
    <section className="filterCities_content">
        <h3 className="cities_name">Cities</h3>
        <ul className="cities_list">
            <li className="cities_options" onClick={() => handleFilterCities()}>All cities</li>
            {cities?.map( city => (
                <li className="cities_options" onClick={() => handleFilterCities(city.id)} key={city.id}>{city.name}</li>
                ))
            }
        </ul>
    </section>
  )
}

export default CategoryFilter