import React, { Component } from 'react';
import getWeatherData from '../../utils/apiUtils';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';
import './Main.css';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isDevelopment: true,
    };
  }

  componentDidMount() {
    console.log(this.getLocation());
    if (this.getLocation()) {
      getWeatherData(this.getLocation()).then((data) => {
        this.setState(data);
      });
    }
  }

  getLocation() {
    return localStorage.getItem('location');
  }

  // setLocation(location) {
  //   localStorage.setItem('location', location);
  // }

  // changeLocation() {
  //   const location = document.querySelectorAll('.search-bar')[0].value +
  //     document.querySelectorAll('.search-bar')[1].value;
  //   this.setLocation(location);
  //   const data = getWeatherData(this.getLocation());
  //   this.setState(data);
  // }

  toggleView(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let content;

    if (this.getLocation()) {
      content = <WeatherFull state={this.state} toggleView={this.toggleView.bind(this)}/>;
    } else {
      content = <Welcome getWeatherData={getWeatherData.bind(this)}/>;
    }

    return (
      <main>
        <Header getWeatherData={getWeatherData.bind(this)}/>
        {content}
      </main>
    );
  }
}
