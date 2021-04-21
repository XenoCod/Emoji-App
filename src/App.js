import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

var headingText = "Welcome to the App"
// var userName= prompt("Your name");

const emojidict = {
  "😂": "Smiling",
  "😢": "Sad",
  "❤": "Lovely",
  "👍": "Thumbs Up",
  "🙌": "Awesome"
}

var emojiList = Object.keys(emojidict);



function App() {

  //   const [counter, setClickedHandler] = useState(0);


  // function likeClickedHandler() {
  //   setClickedHandler(counter + 1);

  // }
  var [meaning, setMeaning] = useState("")

  function emojichangeHandler(event) {
    // console.log(event.target)
    var userInput = event.target.value;
    var meaning = emojidict[userInput];
   

    if (meaning === undefined) {
      meaning = "we don't have the meaning of emoji"
    }
    setMeaning(meaning)


  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>{headingText}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hello, <span id= "userName" style= {{color: "blue" }}>{userName} </spans>
         
        </p> */}

        <h1> Inside out</h1>
        <input onChange={emojichangeHandler} placeholder="Enter your input"></input>
        <div>{meaning} </div>

        <div id="showEmoji">
        { emojiList.map(function (item) {
            return <span> {item} </span>
          })
        }
        </div>
        


        {/* <button onClick = {likeClickedHandler}> Like me  </button> 
        {counter} */}



        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
