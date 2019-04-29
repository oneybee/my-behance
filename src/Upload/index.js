import React, { Component } from 'react'

var openWeatherMapKey = '59bc39177608b635b3514f8156021c3f'

var obj = {
  method: 'GET',
  headers: {
    'X-Auth-Token': 'e600784123014d489c796ab72ed9587d',
  },
}

class weather extends Component {
  constructor() {
    console.log('name')
    super()
    this.state = {
      data: [],
    }
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=59bc39177608b635b3514f8156021c3f')
      .then(response => response.json())
      .then(responseJson => {
        // console.log('weather')
        console.log(responseJson)

        this.setState({
          data: [{ name: 'London' }],
        })
        this.setState()
      })
  }
  render() {
    return (
      <div>
        <span>weather api</span>
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
