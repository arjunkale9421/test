
      import React, { useState } from 'react'


function Form() {
  const [email, SetEmail] = useState()
  const [password, SetPassword] = useState()
  console.log('email', email)
  console.log('password', password)
  function submit(e){
        e.preventDefault()
        console.log("form submitted")
  }
  return (
    <>
      <p>Registration Form</p>
      <div>
        <form  className='colorchangee'>
         <label>
          email:
          <input type="text" class="email" onChange={(e)=>SetEmail(e.target.value)} /></label>
          <label>
            password:
        
          <input type="text" class="password " onChange={(e)=>SetPassword(e.target.value)} /> </label>

          <label>
            age:
            <input type='text'></input>
          </label>
          <button onClick={submit}>submit</button>
          
           
        </form>
      </div>
    </>
  )
}

export default Form
