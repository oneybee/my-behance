import React, { Component } from 'react'

// const data = [{ name: 'name', value: 'seoul' }, { name: 'cnt', value: 39 }]

class weather extends Component {
  constructor() {
    super()
    this.state = {
      data: [{ name: 'name', value: 'seouls' }, { name: 'cnt', value: 19 }],
    }
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=seoul&APPID=59bc39177608b635b3514f8156021c3f')
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        // console.log(responseJson.cnt)
        this.setState({
          data: [{ name: responseJson.city.name, cnt: responseJson.cnt, cloud: responseJson.list[2].clouds.all }],
        })
        this.setState({})
      })
  }
  render() {
    return (
      <div>
        <div>weather api</div>
        <br />
        city name={this.state.data[0]['name']}
        <br />
        seoul cnt={this.state.data[0]['cnt']}
        <br />
        seoul cloud info={this.state.data[0]['cloud']}
      </div>
    )
  }
}

// const Upload = () => {
//   console.log(weather)
//   return (
//     <div>
//       <h2>Upload</h2>
//       <weather />
//     </div>
//   )
// }

export default weather
