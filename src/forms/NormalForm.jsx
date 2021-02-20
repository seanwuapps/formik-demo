import React, { useState } from "react";
import Json from "react-json-view";
const NormalForm = () => {
  const [form, setForm] = useState({
    values: {
      email: "",
      password: "",
    },
    errors: {
      email: false,
      password: false,
    },
    isValid: false,
  });

  const handleChange = (e) => {
    const name = e.target.name; // use form name to identify key in form.values
    const value = e.target.value.trim(); // new value

    const values = { ...form.values, [name]: value };
    const errors = {
      ...form.errors,
      [name]: validateField(name, value),
    };
    const isValid = checkFormValidity(errors);
    setForm({
      ...form,
      values,
      errors,
      isValid,
    });
  };

  // check if all fields has 'false' in errors object
  const checkFormValidity = (errors) => {
    return Object.keys(errors).every((k) => !errors[k]);
  };

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        // required
        if (!value.trim()) {
          return "Email field is required.";
        }
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value)) {
          return "Email is not valid";
        }
        break;
      case "password":
        // required
        if (!value.trim()) {
          return "Password field is required.";
        }
        // must be more than 6 chars
        if (value.length < 6) {
          return "Password must be at least 6 chars.";
        }
        // must contain numbers
        if (!/\d/.test(value)) {
          return "Password must contain numbers";
        }
        // must contain lower case letters
        if (!/[a-z]/.test(value)) {
          return "Password must contain lowercase letters.";
        }
        // must contain upper case letters
        if (!/[A-Z]/.test(value)) {
          return "Password must contain uppercase letters.";
        }
        break;
      default:
        break;
    }
    return false;
  };

  return (
    <form noValidate>
      <Json src={form} theme="ocean" />
      <label>Email</label>
      <input
        className="engraved-2"
        name="email"
        type="email"
        value={form.values.email}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        className="engraved-2"
        name="password"
        type="password"
        value={form.values.password}
        onChange={handleChange}
      />
    </form>
  );
};

export default NormalForm;
