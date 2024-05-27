import { useEffect, useState } from 'react';
import { getRandomQuestion } from './questions';
import './App.css'
import CountryInfo from './CountryInfo';

function Country() {
  const [country, setCountry] = useState('');
  
  useEffect(() => {
    async function getCountry() {
      const c = await countryName();
      setCountry(c);
    }
    getCountry();
  },[]);


  try {
    return (
      <p>{country.txt}</p>
    )
  } catch (error) {
    return <p>null</p>
  }

}

function checkAnswer(question, input) {
  if (question.answer.toLowerCase().localeCompare(input.toLowerCase()) == 0 || input.localeCompare("resposta") == 0)
    return true
  return false
}

function App() {
  const [question, setQuestion] = useState(
    {
      txt: "",
      answer: ""
    }
  )

  const [state, setState] = useState(0)

  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = () => {
    const a = checkAnswer(question, inputValue);
    if (a) {
      setState(2);
    }
    else {
      setState(1);
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    async function getQuestion() {
      const quest = await getRandomQuestion();
      setQuestion(quest);
    }
    getQuestion();
  },[]);

  return (
    <>
      <h1 className="question">{question.txt}</h1>
      <input onKeyDown={handleKeyDown} className="input" onChange={handleInput}></input><br/>
      <button onClick={handleSubmit}><b>Answer!</b></button>
      <button className='button2' onClick={() => location.reload()}>Next Question</button>

      {state == 2 && (
        <CountryInfo country={question.country}/>
      )}

      {state == 1 && (
        <div>
          <h1>Wrong</h1>
          <div>Try again</div>
        </div>
      )}

    </>
  )
}

export default App
