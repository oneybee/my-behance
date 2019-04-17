import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Wrap = styled.div`
  /* background-color: #000; */
  width: calc(100% - 190px);
  margin: 0 auto;
`
const ImageWrap = styled.div`
  height: 40px;
  width: 40px;
`
const Image = styled.img`
  border-radius: 50%;
  height: 100%;
`

const Work = () => {
  return (
    <Wrap>
      <ImageWrap>
        <Image src="https://mir-s3-cdn-cf.behance.net/user/115/b1b97f103255.570d0a8896fd4.jpg" />
      </ImageWrap>
    </Wrap>
  )
}

// const Work = ({ match }) => {
//   return (
//     <div>
//       <h2>Work</h2>
//       <ul>
//         <li>
//           <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       <Route path={`${match.path}/:topicId`} component={Topic} />
//       <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
//     </div>
//   )
// }

// const Topic = ({ match }) => {
//   return (
//     <div>
//       <h3>{match.params.topicId}</h3>
//     </div>
//   )
// }

export default Work
