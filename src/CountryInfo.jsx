function CountryInfo({country}) {
  try {
    return (
      <>
        <h2>{country.name.common}</h2>
        <div className="countryInfo">
          <img src={country.flags.svg} width={400}></img>
          <div className="info">
            <p>Continent: <b>{country.continents[0]}</b></p>
            <p>Population: <b>{country.population}</b></p>
            <p>Capital: <b>{country.capital}</b></p>
          </div>
        </div>
      </>
    )
      
  } catch (error) {
    return(<></>)
  }

}

export default CountryInfo;