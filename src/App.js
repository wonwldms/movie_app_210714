import React from "react";
//import Potato from "./potato"; //java의 import개념으로 봐야하는 건가? //생성한 component는 반드시 app 안에 들어가야 한다. //파일을 분리한다면 이렇게...

const langname = [
  {id : 1, name : "lang1", like : "java"},
  {id : 2, name : "lang2", like : "js"},
  {id : 3, name : "lang3", like : "c++"}
];

function Language({name, fav}){
  return(
    <div>
      <h5>program language {name}</h5>
      <h5>kind : {fav}</h5>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div>
        {langname.map(kind => <Language key={kind.id} name={kind.name} fav={kind.like} /> )}
      </div>
    </div>
  );
}

export default App;
