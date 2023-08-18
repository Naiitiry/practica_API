import './CountryFilter.css'
const Filter_Country = ({countryData,onSelectCountry,onSelectCountry2, onSelectCountry3 }) => {
    const languages = Object.values(countryData.languages).slice(0,3)
    return(
        <>
            <li className="country-filter">
                <img src={countryData.flags.png} alt="flag" className='flags'/>
                <div className='country-filter-description'>
                    <p>País: {countryData.name.common}</p>
                    <p>Capital: {countryData.capital}</p>
                    <p>Region: {countryData.region}</p>
                    <p>Lenguaje: {languages.join(', ')}</p>
                    <p>Población: {countryData.population}</p>
                    <p></p>
                </div>
                <div className='btns-container'>
                    <button onClick={() => onSelectCountry()} className='btns'>Anterior</button>
                    <button onClick={()=> onSelectCountry3()} className='btns'>Primer País</button>
                    <button onClick={() => onSelectCountry2()} className='btns'>Siguiente</button>
                </div>
            </li>
        </>
    )
}
export {Filter_Country}