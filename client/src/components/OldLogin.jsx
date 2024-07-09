import React from 'react'

const Login = () => {
  return (
   <>
   <h1>Login</h1>
   <form>
    <label>Username: </label>
    <input></input>
    <br></br>
    <label>Password: </label>
    <input></input>
    <br></br>
    {/* <button type='submit'>Login</button> */}
    <a href='/user'>Submit</a>

   </form>
   </>
  )
}

export default Login