function CountryInfo({country}) {

  const languageEntries = Object.entries(country.languages);
  
  let languages = "";
  let i = 0
  
  languageEntries.forEach(([code, name]) => {
    languages += name;
    i++;
    if (i != languageEntries.length)
      languages += ", "
  });  

  try {
    return (
      <>
        <h1>{country.name.common}</h1>
        <div className="countryInfo">
          <img className="flag"src={country.flags.svg} width={400}></img>
          <div className="info">
            <p><b>Continent:</b> {country.continents[0]}</p>
            <p><b>Population:</b> {country.population.toLocaleString().replace(',', '.')}</p>
            <p><b>Capital:</b> {country.capital}</p>
            <p><b>Languages:</b> {languages}</p>
          </div>
        </div>
      </>
    )
      
  } catch (error) {
    return(<></>)
  }

}

export default CountryInfo;