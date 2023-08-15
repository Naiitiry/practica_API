import './CountryFilter.css'

const Filter_Country = ({name,capital,continent,lenguage,otherLenguage,population,flag,ubication}) => {

    return(
        <>
            <div className="country-filter">
                <h2 className="country-filter-name">{name}</h2>
                <h3 className="country-filter-h3">{capital}</h3>
                <h3 className="country-filter-h3">{continent}</h3>
                <h3 className="country-filter-h3">{lenguage}</h3>
                <h3 className="country-filter-h3">{otherLenguage}</h3>
                <h3 className="country-filter-h3">{population}</h3>
                <h3 className="country-filter-h3">{flag}</h3>
                <span  className="country-filter-span">
                    {ubication}
                </span>
            </div>
        </>
    )
}
export {Filter_Country}