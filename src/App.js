import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Home from './Home'
import Work from './Work'
import Upload from './Upload'

const Wrap = styled.div`
  background: black;
`
const Link1 = styled(Link)`
  color: white;
  text-decoration: none;
  margin-left: 10px;
`

const App = () => {
  return (
    <Router>
      <Wrap>
        <div>
          <Link1 to="/">Behance</Link1>

          <Link1 to="/work">Work</Link1>

          <Link1 to="/upload">Upload</Link1>

          {/* <hr /> */}

          <Route exact path="/" component={Home} />
          <Route path="/work" component={Work} />
          <Route path="/upload" component={Upload} />
        </div>
      </Wrap>
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
