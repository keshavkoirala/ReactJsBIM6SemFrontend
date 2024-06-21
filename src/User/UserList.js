import React from 'react'
import Navigation from './Navigation'

function UserList() {

    const user_info=[{"user_id":1,"user_name":"ram","email":"ram@gmail.com","mobile_number":"9810441857","first_name":"Ram","middle_name":"","last_name":"sharma",'address':"Inaruwa-10","role":"admin","password":"ram"},
        {"user_id":2,"user_name": "shyam", "email": "shyam@gmail.com", "mobile_number": "9805671234","first_name": "Shyam", "middle_name": "","last_name": "Adhikari", "address":   			    "Biratnagar-1", "role": "admin"},
        {"user_id":3,"user_name": "hari","email": "hari@gmail.com", "mobile_number": "9847654321","first_name": "Hari","middle_name": "Prasad","last_name": "Gurung","address": 			   "Pokhara-3","role": "moderator"},
        {"user_id":4,"user_name": "sita", "email": "sita@gmail.com","mobile_number": "9801234567", "first_name": "Sita","middle_name": "", "last_name": "Thapa","address": "Kathmandu-5", 		"role": "user" }]

    const HandleEdit =(x)=>{

    }
    const HandleDelete =(x)=>{

    }
  return (
    <>
       <div class="container">
        <Navigation />
        <h4>User Information List</h4>
        <table class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>S.N</th>
                    <th>Email</th>
                    <th>User Name</th>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Mobile Number</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    user_info.map((x,i)=>(
                        <>
                            <tr>
                                <td>{i+1}</td>
                                <td>{x.email}</td>
                                <td>{x.user_name}</td>
                                <td>{x.first_name}</td>
                                <td>{x.middle_name}</td>
                                <td>{x.last_name}</td>
                                <td>{x.mobile_number}</td>
                                <td>{x.address}</td>
                                <td>{x.role}</td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <button className="btn btn-primary btn-sm m-1" onClick={() => HandleEdit(x.user_id)}>Edit</button>
                                        <button className="btn btn-danger btn-sm m-1" onClick={() => HandleDelete(x.user_id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </>
                    ))
                }
                
            </tbody>
        </table>
    </div>
    </>

  )
}

export default UserList