import React, { useState } from 'react'
import Navigation from './Navigation'

function Login() {

   const [userName,setUserName]=useState('')
   const [password,setPassword]=useState("")

   function HandleChange (event){
        var name =event.target.name
        var value =event.target.value
        if(name=="user_name")
        {
            setUserName(value)
        }
        else
        {
            setPassword(value)
        }
    }

   function LoginUser(e){
    e.preventDefault()
    if(userName=="" || password =="")
    {
        alert("Please Enter Valid UserName AND Password")
        return
    }
    alert("Your User Name is "+userName+ " and Your password is "+password)
   }
    
  return (
    <>
        <div className="container">
            <Navigation />
            <div className="d-flex justify-content-center">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header text-center">
                           <h3>Login Form</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <div className="form-group">
                                            <label htmlFor="username">User Name</label>
                                            <input type="text" className="form-control" onChange={(e)=>{HandleChange(e)}} value ={userName} name="user_name" id="username" placeholder="Enter Username" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-12'>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" name="password" onChange={(e)=>{HandleChange(e)}} value={password} id="password" placeholder="Enter Password" required />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" onClick={(e)=>{LoginUser(e)}} className="btn btn-primary mt-1">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    </>
  )
}

export default Login