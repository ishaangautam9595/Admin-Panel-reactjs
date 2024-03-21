import React from 'react'
import {useSelector} from 'react-redux'

const Profile2 = () => {
    const profiles = useSelector((state) => state.profile)

  return (
    <>
    Name: {profiles.id}
    <br />
    Email : {profiles.email}
    </>
  )
}

export default Profile2