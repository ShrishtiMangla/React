import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import UserContext from './context/Usercontext'
import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'

import './App.css'

function App() {
  return (
    <>
    <UserContextProvider >
      <div className="text-center">
      <h1 className="text-center text-5xl text-bold  my-auto font-bold">Context API</h1>
      <br />
      <Login />
      <br />
      <Profile />
      <br />
      </div>
    </UserContextProvider>
   </>

  );
}

export default App;
