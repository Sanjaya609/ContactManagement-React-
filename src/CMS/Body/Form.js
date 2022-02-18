import React from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import Validation from '../../components/Error'
import { toast } from 'react-toastify';


let validationSchema=yup.object().shape({
  name:yup.string().required(),
  email:yup.string().email().required(),
  phone:yup.string().required(),
})


const Form = ({contacts,setContacts}) => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const { values, handleSubmit, handleChange,errors} = useFormik({
    enableReinitialize: false,
    initialValues,
    validationSchema:validationSchema,
    onSubmit: (values,{resetForm}) => {
      values['id']= Math.random()*100;
      handleFormSubmit(resetForm);
    }
  });
  const handleFormSubmit=(resetForm)=>{
    resetForm();
    setContacts([...contacts,values]);
    toast("Contact Added Successfully");
  }

  return (
    <form className='contact-add' id='contact-add' onSubmit={handleSubmit}>
      <div className="row form-row">
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <label htmlFor='name'>Name</label></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <input
              type="text"
              name='name'
              style={{ width: "100%" }}
              placeholder='Name'
              className='form-control'
              onChange={handleChange}
              value={values.name} />
              <Validation errors={errors} name="name" /></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <label htmlFor='email'>Email</label></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <input
              type="email"
              name='email'
              style={{ width: "100%" }}
              placeholder='Email'
              className='form-control'
              onChange={handleChange}
              value={values.email} />
              <Validation errors={errors} name="email" /></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <label htmlFor='phone'>Phone</label></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <input
              type="text"
              name='phone'
              style={{ width: "100%" }}
              placeholder='Phone'
              className='form-control'
              onChange={handleChange}
              value={values.phone} />
              <Validation errors={errors} name="phone" /></div>
        </div>
        <div className="col-lg-12 input-label">
          <div className="form-group">
            <button className="submit" type='submit' style={{ width: "100%" }}>Submit</button></div>
        </div>
      </div>

    </form>
  )
}
export default Form;
