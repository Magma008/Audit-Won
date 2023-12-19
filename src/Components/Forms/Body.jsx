import React from 'react'
import Form from './Form'
import Map from './Map'

const Body = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[50vh]'>
        <Form/>
        {/* <Map/> */}
    </div>
  )
}

export default Body