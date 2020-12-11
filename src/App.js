import "bulma/css/bulma.css";
import React, {useReducer, useState} from "react";


const CounterDisplay = ({currentCounter}) => {
  return (
      <div className="column is-half has-text-centered">
        <h1 className="title">{currentCounter}</h1>
      </div>
  );
};

function App() {

  const myReducer = (state, action) => {
    if (isNaN(action.value)) return 0;
    return action.value > 100? 100: action.value < 0 ? 0 : action.value;
  }

  // const [counter, setCounter] = useState(0);
  const [counter, dispatch] = useReducer(myReducer, 0);
  const [inputValue, setInputValue] = useState("");

  const decrement= ()=>{
    dispatch({value: counter - 1});
  }

  const handleKeyDown = (e) =>{
    if (e.key == "Enter"){
      dispatch({value: parseInt(inputValue)});
    }
  }

  return (
      <div className="App">

        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-full">
              <div className="notification">
                <div className="columns">
                  <div className="column is-half">
                    <div className="field has-addons">
                      <div className="control">
                        <input className="input" type="text" placeholder="Put a Number" value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}
                               onKeyDown={handleKeyDown}
                        /></div>
                      <div className="control">
                        <a className="button is-info" onClick={() => dispatch({value: parseInt(inputValue)})}>
                          Assign
                        </a>
                      </div>
                    </div>
                    <div className="buttons has-addons">
                      <button className="button is-primary" onClick={() => dispatch({value: counter + 1}) }
                      >Up</button>
                      <button className="button is-warning" onClick={decrement}
                      >Down</button>
                    </div>
                  </div>
                  < CounterDisplay currentCounter = {counter}/>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
  );
}

export default App;
