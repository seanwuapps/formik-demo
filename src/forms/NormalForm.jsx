import React, { useState } from 'react'
import Json from 'react-json-view'
const NormalForm = () => {
  const [form, setForm] = useState({
    values: {
      email: '',
      password: '',
    },
    errors: {
      email: null, // use null for untouched state
      password: null, // validity check will check for === false
    },
    isValid: false,
  })

  const handleChange = (e) => {
    const name = e.target.name // use form name to identify key in form.values
    const value = e.target.value.trim() // new value

    const values = { ...form.values, [name]: value }
    const errors = {
      ...form.errors,
      [name]: validateField(name, value),
    }
    const isValid = checkFormValidity(errors)
    setForm({
      ...form,
      values,
      errors,
      isValid,
    })
  }

  // check if all fields has 'false' in errors object
  const checkFormValidity = (errors) => {
    return Object.keys(errors).every((k) => errors[k] === false)
  }

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        // required
        if (!value.trim()) {
          return 'Email field is required.'
        }
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!re.test(value)) {
          return 'Email is not valid'
        }
        break
      case 'password':
        // required
        if (!value.trim()) {
          return 'Password field is required.'
        }
        // must be more than 6 chars
        if (value.length < 6) {
          return 'Password must be at least 6 chars.'
        }
        // must contain numbers
        if (!/\d/.test(value)) {
          return 'Password must contain numbers'
        }
        // must contain lower case letters
        if (!/[a-z]/.test(value)) {
          return 'Password must contain lowercase letters.'
        }
        // must contain upper case letters
        if (!/[A-Z]/.test(value)) {
          return 'Password must contain uppercase letters.'
        }
        // must contain special characters
        if (!/[@$!%*#?&]/.test(value)) {
          return 'Password must contain special characters.'
        }
        break
      default:
        break
    }
    return false
  }

  const submit = () => {
    if (form.isValid) {
      alert(JSON.stringify(form.values))
    }
  }

  return (
    <form noValidate autocomplete="nope">
      <sc-accordion>
        <sc-accordion-item heading="Form state">
          <Json src={form} theme="ocean" />
        </sc-accordion-item>
      </sc-accordion>
      <label>Email</label>
      <div className="error">{form.errors.email}</div>
      <input
        name="email"
        type="email"
        value={form.values.email}
        onChange={handleChange}
      />
      <label>Password</label>
      <div className="error">{form.errors.password}</div>
      <input
        name="password"
        type="password"
        value={form.values.password}
        onChange={handleChange}
      />

      <sc-button block disabled={!form.isValid} onClick={submit}>
        Save
      </sc-button>
    </form>
  )
}

export default NormalForm
