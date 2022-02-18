import React from 'react'

export const ToggleDisplay = ({ email, phone }) => {
  return (
    <div className='toggle-display'>
      <div className='form-control toggle-form'>
        {email}
      </div>
      <div className='form-control toggle-form'>
        {phone}
      </div>
    </div>
  )
}
