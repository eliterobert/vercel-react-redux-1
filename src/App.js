import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends Component {
  static defaultProps = { currentDate: ""};
	
  getDate = async () => {
    const response = await fetch('/api/date');
	console.log(`getDate: returned from fetch`);
    const body = await response.json();
	console.log(`getDate: got response.json() ; response.status = ${response.status}`);
    if (response.status !== 200) {
		throw Error(body.message);
	}
    return body;
  };	
	
  componentDidMount() {
    this.getDate()
	  .then(res => {
		console.log(`componentDidMount: res = ${res}`);
		//this.props.currentDate = res.toString();
		this.props.currentDate = res();
		console.log(`componentDidMount: this.props.currentDate = ${this.props.currentDate}`);
	  })
      .catch(err => console.log(err));
  }  
  
  render() {	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
			<p>{ this.props.currentDate } </p>		
      </header>
    </div>
  );
 }
}

export default App;
