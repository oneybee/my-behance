import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { Field, reduxForm } from 'redux-form'
import CreditCardInput from 'react-credit-card-input'

const Wrap = styled.div`
  background-color: rgb(35, 72, 166);
  /* width: calc(100% - 190px); */
  color: white;
  margin: 50px 15% 0 15%;
  line-height: 30px;
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
    <Wrap>
      <form onSubmit={handleSubmit}>
        <div>
          <label>성함</label>
          <div>
            <Field name="성함" component="input" type="text" placeholder="성함" />
          </div>
        </div>

        <div>
          <label>이메일</label>
          <div>
            <Field name="email" component="input" type="email" placeholder="Email" />
          </div>
        </div>
        <div>
          <label>전화번호</label>
          <div>
            <Field name="번호" component="input" type="string" placeholder="번호" />
          </div>
        </div>

        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>

        <CreditCardInput />

        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </Wrap>
  )
}

export default reduxForm({
  form: 'payment', // a unique identifier for this form
})(Form)
