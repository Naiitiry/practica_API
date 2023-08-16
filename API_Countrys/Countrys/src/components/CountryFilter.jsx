import './CountryFilter.css'
const Filter_Country = ({countryData,onSelectCountry,onSelectCountry2, onSelectCountry3 }) => {
    
    return(
        <>
            <li className="country-filter">
                <h2 className="country-filter-name">{countryData.name.common}</h2>
                <h3>Capital: {countryData.capital}</h3>
                <h3>Region: {countryData.region}</h3>
                <h3>Lenguaje: {countryData.languages.ara}</h3>
                <h3>Población: {countryData.population}</h3>
                <h3></h3>
                <div>
                    <button onClick={() => onSelectCountry()} className='btns'>Mostrar Primer País</button>
                    <button onClick={()=> onSelectCountry3()} className='btns'>Primer País</button>
                    <button onClick={() => onSelectCountry2()} className='btns'>Mostrar Siguiente País</button>
                </div>
            </li>
        </>
    )
}
export {Filter_Country}