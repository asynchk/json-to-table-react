import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components'
import logo from './logo.svg';
import './App.css';


import TextInput from './components/TextArea/TextArea.Component';
import ButtonGroup from './components/ButtonGroup/ButtonGroup.Component';
import TableContainer from './components/Table/Table.Container';
import TableDataSample from './components/Table/tabledatasample.json';
import theme from './styles/theme';

import { Segment, Icon } from 'semantic-ui-react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      input: TableDataSample,
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);
  }
  onReset = () => {
    console.log("onReset")
    const textInput = document.querySelector("#jsoninput")
    textInput.value='';
    this.setState({
      input: ''
    })
  }
  onSubmit = () => {
    const textInput = document.querySelector("#jsoninput").value;
    console.log(textInput)
    try {
      const jsonInput =  JSON.parse(textInput);
      console.log(jsonInput)
      this.setState({
        input: jsonInput
      });
    } catch (e) {
     console.log(e.message);
    }

  }
  
  render() {
    const { input } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Json To React Table</h1>
          <Icon className="App-logo" name="table" size="big"/> 
        </header>
        <p className="App-intro">
          To get started, paste a <code>Json input</code> and submit to render a table.
        </p>
          <Segment.Group horizontal>
          <Segment>
            <ButtonGroup
              onSubmit={this.onSubmit}
              onReset={this.onReset}
            />
            <TextInput />
          </Segment>
          <Segment>
        <ThemeProvider theme={theme}>
          <TableContainer data={this.state.input}/>
        </ThemeProvider>
        </Segment>
            </Segment.Group>
      </div>
    );
  }
}

export default App;
