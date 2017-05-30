import React, { Component } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';


export default class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Welcome />
        <WeatherFull />
      </main>
    );
  }
}