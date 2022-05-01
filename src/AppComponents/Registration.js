import React from 'react'

export default function Registration() {
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
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Height</label>
                    <div className="col-sm-5">
                        <input type="number" className="form-control" id="inputEmail3" placeholder='ft' />
                    </div><div className="col-sm-5">
                        <input type="number" className="form-control" id="inputEmail3" placeholder='in' />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Weight</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" id="inputEmail3" placeholder='kg' />
                    </div>
                </div>
                
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Blood Group</label>
                    <div className="col-sm-10">
                        <select id="inputState" class="form-select">
                            <option selected>Choose...</option>
                            <option> A+ </option>
                            <option> A- </option>
                            <option> B+ </option>
                            <option> B- </option>
                            <option> O+ </option>
                            <option> O- </option>
                            <option> AB+ </option>
                            <option> AB- </option>
                        </select>
                    </div>
                </div>
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
