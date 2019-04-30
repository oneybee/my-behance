import React, { Component } from 'react'
import { geolocated, GeolocatedProps } from 'react-geolocated'
import axios from 'axios'

var lat = ['35.555861199999995']
var lon = ['127.0780834']

//geolocated props example code
class Demo extends React.Component {
  render() {
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.props.coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr>
        </tbody>
      </table>
    ) : (
      <div>Getting the location data&hellip; </div>
    )
  }
}

//upload page
class Upload extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [{ name: 'name', value: 'ssss' }, { name: 'cnt', value: 19 }],
      lat: [],
      lon: [],
    }
  }

  componentDidMount() {
    //fetch weather api

    // fetch('http://api.openweathermap.org/data/2.5/forecast?APPID=59bc39177608b635b3514f8156021c3f&lat=' + '35' + '&lon=' + lon)
    // fetch('http://api.openweathermap.org/data/2.5/forecast?APPID=59bc39177608b635b3514f8156021c3f&', {
    //   params: {
    //     lat: 35,
    //     lon: 127,
    //   },
    // })

    //axios code and it works well, but state was not work well

    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: 30.18,
          lon: 30.87,
          appid: '59bc39177608b635b3514f8156021c3f',
        },
      })

      // .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.data.name)
        console.log(this.props.coords.latitude)
        console.log(this.props.coords.longitude)

        this.setState({
          // data: [{ name: responseJson.city.name, cnt: responseJson.cnt, cloud: responseJson.list[2].clouds.all }],
          data: [{ name: responseJson.data.name }],
        })
      })
  }
  render() {
    return (
      <div>
        <div>weather api</div>
        <br />
        city name={this.state.data[0]['name']}
        {/* {responseJson.data.name} */}
        <br />
        seoul cnt={this.state.data[0]['cnt']}
        <br />
        seoul cloud info={this.state.data[0]['cloud']}
        <br />
      </div>
    )
  }
}

//axios example code

// function getWeather(props) {
//   axios
//     .get('http://api.openweathermap.org/data/2.5/weather', {
//       params: {
//         lat: 30.18,
//         lon: 30.87,
//         appid: '59bc39177608b635b3514f8156021c3f',
//       },
//     })
//     .then(function(response) {
//       // console.log(response)
//     })

//     .catch(function(error) {
//       // console.log(error)
//     })
// }
// getWeather()

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Upload)
