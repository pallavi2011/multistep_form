import React from 'react'

const PersonalInfo = ({ formData, setFormData }) => {
  return (
    <>
    <div className='form'>
        <div className="form-group">
          <input type="text" placeholder="First Name" name="fname" value={formData.firstname} onChange={(e) => {
          setFormData({ ...formData, firstname: e.target.value });
        }} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Last Name" name="lname" value={formData.lastname} onChange={(e) => {
          setFormData({ ...formData, lastname: e.target.value })}} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address" value={formData.email} onChange={(e) => {
          setFormData({ ...formData, email: e.target.value })}} name="email" required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Phone Number" name="phone" value={formData.phone} onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value })}} required />
        </div>
        </div>
       
      
        
    </>
  )
}

export default PersonalInfo