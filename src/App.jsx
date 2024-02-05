import Header from "./Component/Header";
import UserInput from "./Component/UserInput";
import Result from "./Component/Result";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 2
});
const inputIsValid = userInput.duration >= 1;
const handleChange = (inputIdentidier, newValue) => {
    setUserInput(preUserInput => {
        return{
            ...preUserInput,
            [inputIdentidier]: +newValue, //duhet +newValue
        }
    });
}
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {inputIsValid && <Result inputs={userInput}/>}
      {!inputIsValid && <p className="center">Please enter a duration greater than 0.</p>}
    </>
  )
}

export default App
