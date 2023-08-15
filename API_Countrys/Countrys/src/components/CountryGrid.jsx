import { useFetch } from "./useFetch.js"
import { Filter_Country } from "./CountryFilter.jsx"
import { useState } from "react"

const CountrysWorld = (name) => {
    const {data,loading,error} = useFetch(`https://restcountries.com/v3.1/name/${name}`)
    const {country,setCountry} = useState('')
    
    return(
        <>
            <div className="country-search-title">
                <h1>
                    Filtro de paises
                </h1>
            </div>
            <div className="country-search">
                {loading && <h2>Cargando...</h2>}
                {error && <h2>Error: {error.message}</h2>}
                {data && (
                    <Filter_Country
                    
                    />
                )}
            </div>
        </>
    )
}
export {CountrysWorld}