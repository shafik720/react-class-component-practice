import React from 'react';
import ReactDOM from 'react-dom'

class Test{
  print(){
    return(
      <h2>Hello World </h2>
    )
  }
}

const Testcomponent = new Test();
ReactDOM.render(Testcomponent.print(), document.getElementById('root'));