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

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length < 1) {
    errors.username = '1글자 이상을 입력해야 합니다.'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.번호) {
    errors.번호 = 'Required'
  }

  return errors
}
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error}</span>)}
    </div>
  </div>
)

const Form = props => {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <Wrap>
      <form onSubmit={handleSubmit}>
        <div>
          <label>성함</label>
          <div>
            <Field name="username" component={renderField} type="text" placeholder="성함" />
          </div>
        </div>

        <div>
          <label>이메일</label>
          <div>
            <Field name="email" component={renderField} type="email" placeholder="Email" />
          </div>
        </div>
        <div>
          <label>전화번호</label>
          <div>
            <Field name="번호" component={renderField} type="string" placeholder="번호" />
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
          <button type="submit" disabled={submitting}>
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
  validate,
})(Form)
