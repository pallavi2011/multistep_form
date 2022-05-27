import React from 'react'

const Payment = ({formData, setFormData}) => {
  return (
    <div className='form'>
    <div className="form-group">
          <input type="text" placeholder="Name on the card" name="cardname" value={formData.nameoncard} onChange={(e) => {
          setFormData({ ...formData, nameoncard: e.target.value });
        }} required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="Enter Card Number" name="cardnum" value={formData.cardnum} onChange={(e) => {
          setFormData({ ...formData, cardnum: e.target.value });
        }} required />
        </div>
        <div className="form-group">
          <input type="number" placeholder="CVV" name="cvv" value={formData.cvv} onChange={(e) => {
          setFormData({ ...formData, cvv: e.target.value });
        }} required />
        </div>
    </div>
    
  )
}

export default Payment