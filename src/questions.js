export async function getRandonCountry() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const contries = await response.json();
    
    const randonId = Math.floor(Math.random()*contries.length)
    const rdmCountry = contries[randonId];
    return rdmCountry;
}

export async function getRandomQuestion() {
    const country = await getRandonCountry();

    const questions = [
        {
            txt: "What is the capital of " + country.name.common + "?",
            answer: country.capital[0],
            country: country
        },

        {
            txt: country.capital[0] + " is the capital of which country?",
            answer: country.name.common,
            country: country
        },

        {
            txt: "On which continent is the country " + country.name.common + "?",
            answer: country.continents[0],
            country: country
        }
    ]

    const questId = Math.floor(Math.random()*questions.length);
    const question = questions[questId];
    return question
}
