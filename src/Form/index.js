import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Field, reduxForm } from 'redux-form'

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

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    // <Wrap>
    //   <ImageWrap>
    //     <Image src="https://mir-s3-cdn-cf.behance.net/user/115/b1b97f103255.570d0a8896fd4.jpg" />
    //     form
    //   </ImageWrap>
    <div>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            {/* <Field name="firstName" type="text" conponent="input" placeholder="First Name" /> */}

            {/* <Field name="username" type="text" label="주문자 성함" width={150} /> */}
          </div>
        </div>

        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
      </form>
    </div>
    // </Wrap>
  )
}

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(Form)
