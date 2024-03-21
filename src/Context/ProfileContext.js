import React, { createContext, useState } from 'react';

export const Profile = createContext();
let users = JSON.parse(localStorage.getItem('user'));

const ProfileContext = ({children}) => {

    const [data, setData] = useState(users);
    const [isLoading, setIsLoading] = useState(true);
  return (
    <>
    <Profile.Provider value={[data, setData]}>{children}</Profile.Provider>
    {/* <Loader.Provider value={[isLoading, setIsLoading]}>{children}</Loader.Provider> */}
    </>
  )
  
}

export default ProfileContext