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

const Form = () => {
  return (
    <Wrap>
      <ImageWrap>
        <Image src="https://mir-s3-cdn-cf.behance.net/user/115/b1b97f103255.570d0a8896fd4.jpg" />
        form
      </ImageWrap>
    </Wrap>
  )
}

export default Form
