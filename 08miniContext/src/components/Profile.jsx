import React from 'react'
import UserContext from '../context/Usercontext'


function Profile() {
    const {user} = React.useContext(UserContext)
  if(!user) {
    return <h1>Please login to view your profile</h1>
  } else {
    return (
      <div>
        <h1>Profile</h1>
        <p>Username: {user.username}</p>
        <p>Password: {user.password}</p>
      </div>
    )
  }
}

export default Profile