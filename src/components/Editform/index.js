import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify';

export const Editform = ({ name, email, phone, id,setisEditing,contacts,setContacts,cname}) => {


  const initialValues = {
    name: name,
    email: email,
    phone: phone,
    id:id
  };
  const{values,handleChange,handleSubmit}=useFormik({
    initialValues,
    onSubmit:(values,{resetForm})=>{
      updateContact(values,resetForm);
    }
  });

  const updateContact=(values,resetForm)=>{
    resetForm();
    const newList= contacts.map((item)=>{
      if(item.id===values.id){
        return {...item,name:values.name,email:values.email,phone:values.phone}
      } 
      return item;
    });
    setContacts(newList);
    setisEditing(false);
    toast("Successfully Updated")
  }  

  return (
    <div className={cname} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }} >
      <form className="edit-form col-md-6" onSubmit={handleSubmit} style={{ 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center' }}>
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
                value={values.name}
                onChange={handleChange}
                 /></div>
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
                value={values.email}
                onChange={handleChange}
                 /></div>
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
                value={values.phone}
                onChange={handleChange}
                 /></div>
          </div>
          <div className="col-lg-12 input-label">
            <div className="form-group">
              <button className="submit" type='submit' style={{ width: "100%" }}>Update</button></div>
          </div>
        </div>
      </form>
    </div>
  )
}
