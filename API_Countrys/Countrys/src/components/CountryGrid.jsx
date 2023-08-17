import { useFetch } from "./useFetch.js"
import { Filter_Country } from "./CountryFilter.jsx"
import { useState } from "react"
import './CountryGrid.css'

const CountrysWorld = () => {
    const {data,loading} = useFetch(`https://restcountries.com/v3.1/all/`)
    console.log(data);
    //índice de paises
    const [countryIndex,setCountryIndex] = useState(0)
    const maxLength = data ? data.length : 0

    const handleCountryPreview = () => {
        if(countryIndex>0)
        setCountryIndex(countryIndex-1);
    };
    const handleCountryNext = ()=>{
        if(countryIndex<maxLength){
            setCountryIndex(countryIndex+1)
        }
    }
    const handleFirstCountry = ()=>{
        setCountryIndex(0)
    }
    return(
        <div className="country-search">
            <div className="country-search-title">
                <h1>
                    Lista de paises: 
                </h1>
            </div>
            <div className="country-search-list">
                <ul>
                    {loading && <h2>Cargando...</h2>}
                    {data && (
                        <Filter_Country
                        countryData={data[countryIndex]}
                        onSelectCountry={handleCountryPreview}
                        onSelectCountry2={handleCountryNext}
                        onSelectCountry3={handleFirstCountry}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}
export {CountrysWorld}