import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
  return (
    <div className ="text-3xl bg-amber-700 text-center  text-white p-2">User: {userid}</div>
  )
}

export default User