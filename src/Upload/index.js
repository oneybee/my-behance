import React, { Component } from 'react'
import { geolocated, GeolocatedProps } from 'react-geolocated'
import axios from 'axios'

export const sleep = sec => {
  return new Promise(resolve => setTimeout(resolve, sec * 1000))
}

//geolocated props example code
class Demo1 extends React.Component {
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
geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo1)

//upload page
class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{ name: 'name', value: 'ssss' }, { name: 'cnt', value: 19 }],
      lat: [],
      lon: [],
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps)
    console.log('sss', nextProps.coords.latitude)

    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          lat: nextProps.coords.latitude,
          lon: nextProps.coords.longitude,
          appid: '59bc39177608b635b3514f8156021c3f',
        },
      })
      .then(responseJson => {
        console.log(responseJson)
        this.setState({
          data: [
            { name: responseJson.data.name },
            {
              temp: responseJson.data.main.temp - 273.15 + '°C',
            },
          ],
        })
      })
  }
  render() {
    return (
      <div>
        {/* <Demo /> */}
        <div>weather api</div>
        <br />
        city name={this.state.data[0]['name']}
        <br />
        {this.state.data[0]['name']} temp={this.state.data[1]['temp']}
        <br />
        <br />
      </div>
    )

    // return (
    //   <div>
    //     {/* <div> city name={this.state.data[0]['name']}</div> */}
    //     !this.props.isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) : !this.props.isGeolocationEnabled ? (<div>Geolocation is not enabled</div>) : this.props.coords ? (
    //     <table>
    //       <tbody>
    //         <tr>
    //           <td>latitude</td>
    //           <td>{this.props.coords.latitude}</td>
    //         </tr>
    //         <tr>
    //           <td>longitude</td>
    //           <td>{this.props.coords.longitude}</td>
    //         </tr>
    //         <tr>
    //           <td>altitude</td>
    //           <td>{this.props.coords.altitude}</td>
    //         </tr>
    //         <tr>
    //           <td>heading</td>
    //           <td>{this.props.coords.heading}</td>
    //         </tr>
    //         <tr>
    //           <td>speed</td>
    //           <td>{this.props.coords.speed}</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //     ) : (<div>Getting the location data&hellip; </div>)
    //   </div>
    // )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Upload)
