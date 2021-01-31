import { useState } from "react";

const BrowserForm = () => {
  const [values, setValues] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(values));
  };
  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <form action="" className="form" onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <input onChange={changeValue} type="text" name="name" required />
      </div>
      <div>
        <label>Email</label>
        <input onChange={changeValue} type="email" name="email" required />
      </div>
      <div>
        <label>Credit card</label>
        <input
          type="text"
          pattern="/(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{4}[-. ]?\d{4}"
          required
          title="Please input valid credit card number"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default BrowserForm;
