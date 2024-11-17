import React from 'react'
import './regform.css'

const Regform = () => {
  return (
    <div className='sideBar'>
        <h1 className="title">Registration Form</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="info">
            <form>
              <table className="centertable">
                <tbody>
                  <tr>
                    <td>Reg ID:</td>
                    <td>
                      <input
                        type="text"
                        id="sid"
                        className="form-control"
                       
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Full Name:</td>
                    <td>
                      <input
                        type="text"
                        id="sname"
                        className="form-control"
                      
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Email:</td>
                    <td>
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                      
                      />
                    </td>
                  </tr>
                
                  <tr>
                    <td>Mobile Number:</td>
                    <td>
                      <input
                        type="number"
                        id="mobile"
                        className="form-control"
                       
                      />
                    </td>
                  </tr>
                 
                    <td>
                      <input
                        type="button"
                        value="Submit"
                        className="btn btn-primary"
                       
                      />
                      <br />
                    </td>
                  
                </tbody>
              </table>
            
            </form>
          </div>
        </div>

        <div className="col-md-6">
          <p className="display-6">Registration Summary</p>
          <p>Register Id:</p>
          <p>Full Name:</p>
          <p>Email:</p>
          <p>Mobile Number: </p>
          
   
        </div>
      </div>



    </div>
    
    
  )
}

export default Regform;
 