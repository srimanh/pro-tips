import React, { useState, useEffect } from "react";

export function Contact() {
  const initialValues = { firstname: "", lastname: "", email: "", phno: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }

    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid email!";
    }

    if (!values.phno) {
      errors.phno = "Phone number is required!";
    } else if (values.phno.length < 10) {  // Changed the condition here
      errors.phno = "Please enter a valid Phone number!";
    }

    return errors;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {Object.keys(formErrors).length === 0 && isSubmit? (<div className="success">Registered Succesfully👍</div>):(<div></div>)}
        <div className="sub-containers">
          <label htmlFor="">First Name:</label>
          <br />
          <input
            type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
          />
          <p>{formErrors.firstname}</p>
        </div>
        <div className="sub-containers">
          <label htmlFor="">Last Name:</label>
          <br />
          <input
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
          />
          <p>{formErrors.lastname}</p>
        </div>
        <div className="sub-containers">
          <label htmlFor="">Email:</label>
          <br />
          <input
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="sub-containers">
          <label htmlFor="">Ph no:</label>
          <br />
          <input
            type="text"
            name="phno"
            value={formValues.phno}
            onChange={handleChange}
          />
          <p>{formErrors.phno}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


