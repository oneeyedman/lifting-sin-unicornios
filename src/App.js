import React, { Component } from 'react';
import './App.css';
import Texto from './components/Texto';
import Campo from './components/Campo';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);

    this.state = {
      campo: 'Escribe algo...'
    }
  }

  handleFieldChange(unicornText) {
    this.setState({
      campo: unicornText
    })
  }

  render() {
    return (
      <div className="App">
        <Campo miotrotexto={this.state.campo} label="github"  miotroclickdeApp={this.handleFieldChange}/>
        
        <hr />

        <Campo miotrotexto={this.state.campo} label="phone"  miotroclickdeApp={this.handleFieldChange} />

        <Texto mitexto={this.state.campo} />
      </div>
    );
  }
}

export default App;
