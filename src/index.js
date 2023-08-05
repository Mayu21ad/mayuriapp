import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class StateManagement extends React.Component{
  constructor(){
    super()
    this.state={year:"3rd"}
  }

first = () => this.setState({year:"1st"})
second = () => this.setState({year:"2nd"})
three = () => this.setState({year:"3rd"})
four = () => this.setState({year:"4th"})
render(){
  return (
    <div>
      <h1>I am in {this.state.year} year </h1>
      <button type="button" onClick={this.first}>1st</button>
      <button type="button" onClick={this.second}>2nd</button>
      <button type="button" onClick={this.three}>3rd</button>
      <button type="button" onClick={this.four}>4th</button>
    </div>
  )
}
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateManagement />
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
