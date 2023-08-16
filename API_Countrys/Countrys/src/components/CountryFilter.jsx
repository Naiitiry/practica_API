import './CountryFilter.css'
const Filter_Country = ({countryData,onSelectCountry,onSelectCountry2 }) => {
    
    return(
        <>
            <li className="country-filter">
                <h2 className="country-filter-name">{countryData.name.common}</h2>
                <h3>Capital: {countryData.capital}</h3>
                <h3>Region: {countryData.region}</h3>
                <h3>Lenguaje: {countryData.languages.ara}</h3>
                <h3></h3>
                <button onClick={() => onSelectCountry(-1)}>Mostrar Primer País</button>
                <button onClick={() => onSelectCountry2(1)}>Mostrar Siguiente País</button>
            </li>
        </>
    )
}
export {Filter_Country}