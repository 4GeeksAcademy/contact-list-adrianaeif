import React from "react";

const NewContact= () => {

    return (
        <div className="container justify-content-center">
            <h1>Add a new contact</h1>
            <div className="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">Full Name</span>
                <input type="text" className="form-control" placeholder="Full Name..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="Email..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" className="form-control" placeholder="Phone Number..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" className="form-control" placeholder="Address..." aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </div>
    );

}

export default NewContact;