import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

function UserRegistrationForm() {

    const [formData,setFormData]=useState({
        'username':'',
        "email":"",
        "mobile_number":"",
        "first_name":"",
        "middle_name" :"",
        "last_name" :"",
        "address" :"",
        "role":""
    })
    

    const HandleChange =(event)=>{
        debugger
        var name =event.target.name
        var value =event.target.value 
        setFormData((p)=>({
            ...p,
            [name]:value
        }))
    }

    const RegisterUser =()=>{
        if(formData.username=="")
        {
            alert("Please Enter Username")
            return
        }
    }
   
  return (
    <>
        <div className="container m-1">
            <Navigation />
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header text-center">
                        <h3>User Registration</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="username">User Name</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.username} name="username" id="username" placeholder="Enter username" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.email} name="email" id="email" placeholder="Enter Email" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="mobile_number">Mobile Number</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.address} name="mobile_number" id="mobile_number" placeholder="Enter Mobile Number" required />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="first_name">First Name</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.first_name} name="first_name" id="first_name" placeholder="Enter First Name" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="middle_name">Middle Name</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.middle_name} name="middle_name" id="middle_name" placeholder="Enter Middle Name" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="last_name">Last Name</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.last_name} name="last_name" id="last_name" placeholder="Enter Last Name " required />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                   
                                    <div className='col-sm-4'>
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <input type="text" className="form-control" onChange={HandleChange} value={formData.address} name="address" id="address" placeholder="Enter Address" required />
                                        </div>
                                    </div>
                                    <div className='col-sm-4'>
                                        <div class="form-group">
                                            <label for="role">Role</label>
                                            <select class="form-control" id="role" value ={formData.role} onChange={HandleChange} required>
                                                <option value="" disabled selected>Select User Role</option>
                                                <option value="admin">ADMIN</option>
                                                <option value="blogger">BLOGGER</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" onClick={RegisterUser} className="btn btn-primary mt-1">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserRegistrationForm