import React from 'react'
import doc from './../doctor.png'
import pat from './../patient.jpg'

export default function Main() {
    return (
        <div className='d-flex justify-content-around container' style={{ marginTop: '10%' }}>

            <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <a href="#" className="btn btn-primary">Continue as Patient</a>
                    </div>
                    <img src={pat} className="card-img-bottom" alt="..." />
                    
            </div>
            <div className="card" style={{width: '18rem'}}>
                <img src={doc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <a href="#" className="btn btn-primary">Continue as Doctor</a>
                    </div>
            </div>
            {/* </div > */}
        </div >
    )
}
