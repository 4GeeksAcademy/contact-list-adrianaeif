import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

const NewContact= () => {

    const { actions } = useContext(Context);


    const [contact, setContact] = useState ({
        name:"",
        email:"",
        phone:"",
        address:"",   
    })


    return (
        <div className="container justify-content-center">

            <h1 className="text-center">Add a new contact</h1>
            
            <div className="mb-3">
                <label htmlFor="" className="fw-bold form-label">Full Name</label>
                <input type="text" className="form-control" value={contact.name} 
                onChange={
                    (event) => setContact({
                        ...contact,
                        name: event.target.value
                    })
                }/>
            </div>
            <div className="mb-3">
                <label htmlFor="" className="fw-bold form-label">Email</label>
                <input type="text" className="form-control" vale={contact.email}
                 onChange={
                    (event) => setContact({
                        ...contact,
                        email: event.target.value
                    })
                }/>
            </div>
            <div className=" mb-3">
                <label htmlFor="" className="fw-bold form-label">Phone</label>
                <input type="text" className="form-control" value={contact.phone}
                 onChange={
                    (event) => setContact({
                        ...contact,
                        phone: event.target.value
                    })
                }/>
            </div>
            <div className=" mb-3">
                <label htmlFor="" className="fw-bold form-label">Address</label>
                <input type="text" className="form-control" value={contact.address}
                 onChange={
                    (event) => setContact({
                        ...contact,
                        address: event.target.value
                    })
                }/>
            </div>
            <button type="submit" className="mb-3 btn btn-primary w-100" onClick={()=>actions.newContact(contact)}>Save</button>
            <Link to="/">
				<p className="navbar-brand mb-0">or get back to contacts</p>
			</Link>
        </div>
        
    );

}

export default NewContact;