import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
class Contador extends Component{
  constructor(prop){
    super(prop);
    this.state ={
      contador:0
    };
  }
  
  render(){
    return(<div>
    <p>{this.state.contador}</p>
    <button onClick={ ()=>{ this.setState({ contador: this.state.contador + 1 })}}>aumentar</button>
    <button onClick={()=>{this.setState({ contador: this.state.contador - 1})}}> disminuir</button>
    </div>);
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    let nombre = "Berna"
    return (
      <div>
      <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
