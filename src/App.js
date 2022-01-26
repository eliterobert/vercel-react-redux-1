import React, { Component } from 'react';
import './App.css';

export class App extends Component {
  //static defaultProps = { currentDate: ""};

  constructor(props) {
    super(props);
    this.state = {currentDate: (new Date('2020-08-08')).toString()};
  }

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

  getItems = async () => {
    const response = await fetch('/api/items');
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
		this.setState({ currentDate: res })
		//console.log(`componentDidMount: this.props.currentDate = ${this.props.currentDate}`);
	  })
      .catch(err => console.log(err));
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Current date is:
        </p>
			<p>{ this.state.currentDate } </p>
      </header>
    </div>
  );
 }
}

export default App;
