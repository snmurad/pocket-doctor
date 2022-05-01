import React from 'react'

export default function RegistrationDoc() {
    return (
        <div className='container mt-5'>
            <h3 className='d-flex justify-content-center mb-4'>Registration</h3>
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">DOB</label>
                    <div className="col-sm-10">
                        <input type="date" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">CNIC</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">City</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <hr/>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Qualification</label>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="inputEmail3" placeholder='Degree Program' />
                    </div>
                    <div className="col-sm-5">
                        <input type="text" className="form-control" id="inputEmail3" placeholder='From' />
                    </div>
                </div>
                <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label"></label>
                <div className="col-sm-10">

                <button type="submit" className="btn btn-primary">Add another</button>
                </div>
                </div>
                <hr/>
                
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                
                <div className="d-flex justify-content-end">
                <button type="submit" className="btn btn-primary col-md-5">Register</button>
                </div>
            </form>
        </div>
    )
}
