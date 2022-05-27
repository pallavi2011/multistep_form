import React from 'react'

const Address = ({formData, setFormData}) => {
  return (
    <div className='form'>
    <div className="form-group">
      <div>
          <input type="text" placeholder="Address Line 1" name="address1" value={formData.address1} onChange={(e) => {
          setFormData({ ...formData, address1: e.target.value });
        }} required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="Address Line 2" name="address2" value={formData.address2} onChange={(e) => {
          setFormData({ ...formData, address2: e.target.value })}} required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="City" value={formData.city} onChange={(e) => {
          setFormData({ ...formData, city: e.target.value })}} name="city" required />
        </div>
        <div className="form-group">
          <input type="text" placeholder="State" name="state" value={formData.state} onChange={(e) => {
          setFormData({ ...formData, state: e.target.value })}} required />
      </div>
      <div className="form-group">
          <input type="number" placeholder="PinCode" name="pincode" value={formData.pincode} onChange={(e) => {
          setFormData({ ...formData, pincode: e.target.value })}} required />
      </div>
      <div className="form-group">
          <input type="text" placeholder="Country" name="country" value={formData.country} onChange={(e) => {
          setFormData({ ...formData, country: e.target.value })}} required />
      </div>
      </div>
      </div>
  )


}

export default Address