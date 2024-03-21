import React, { useContext } from 'react'
import {Profile} from '../Context/ProfileContext';

const Profilee = () => {
    const [ data ] = useContext(Profile);

  return (
    <>
    <div className='row'>
     <p>Email : {data.email}</p>
     <p>Id: {data.id}</p>
    </div>
    </>
  )
}

export default Profilee