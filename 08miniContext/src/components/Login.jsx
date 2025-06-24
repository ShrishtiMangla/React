import React from 'react'
import UserContext from '../context/Usercontext'


function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const {setUser} = React.useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" className="outline" value={username}
        onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        <input className="outline ml-2.5" type="password" value={password}
        onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />  
        <button className="ml-2 bg-green-400 px-3 py-1" onClick = {handleSubmit}>Submit</button>  
    </div>
  )
}

export default Login