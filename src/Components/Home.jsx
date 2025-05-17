import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {

    const [adminTotal ,setAdminTotal ] = useState()
    const [employeeTotal,setemployeeTotal ] = useState()
    const [salaryTotal ,setSalaryTotal ] = useState()

    useEffect(()=> {
        adminCount();
        employeeCount();

   },[])

   const adminCount =() => {
        axios.get('http://localhost:3000/auth/admin_count')
        .then(result => {
            if(result.data.Status){
                setAdminTotal(result.data.Result[0].admin)
            }
        })
   }
   const employeeCount =() => {
        axios.get('http://localhost:3000/auth/employee_count')
        .then(result => {
            if(result.data.Status){
                setemployeeTotal(result.data.Result[0].employee)
            }
        })
    }
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-around'>
            <h5>Total:  {adminTotal}</h5>
            <h5></h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Employee</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-around'>
            <h5>Total:   {employeeTotal}</h5>
            <h5></h5>
          </div>
        </div>
        <div className='px-3 pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>Salary</h4>
          </div>
          <hr />
          <div className='d-flex justify-content-between'>
            <h5>Total:</h5>
            <h5></h5>
          </div>
        </div>
      </div>
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Admins</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td></td>
                  <td>
                  <button
                    className="btn btn-secondary btn-sm me-2">
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm" >
                    Delete
                  </button>
                  </td>
                </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
