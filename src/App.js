import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
import Upload from './Upload'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/upload" component={Upload} />
      </div>
    </Router>
  )
}

export default App

// import React, { Component } from 'react'
// import logo from './logo.svg'
// import styled, { css } from 'styled-components'
// import { Row, Column } from 'ruucm-blocks'

// const Wrap = styled.div`
//   background: red;
// `

// const Title = styled.h1`
//   font-size: 30px;
// `

// const StyledColumn = styled(Column)`
//   background: green;
// `

// const App = () => {
//   return (
//     <Wrap>
//       <Title>asdf</Title>
//       apap
//       <Row>
//         <StyledColumn col="6">1</StyledColumn>
//         <Column col="6">2</Column>
//       </Row>
//     </Wrap>
//   )
// }

// export default App
