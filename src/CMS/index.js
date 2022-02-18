import React from 'react'
import Navbar from './Navbar'
import Body from './Body';
const CMS = () => {
    return (
        <div className='wrapper'>
            <div className="content">
                <Navbar />
                <Body/>
            </div>
        </div>
    )
}
export default CMS;