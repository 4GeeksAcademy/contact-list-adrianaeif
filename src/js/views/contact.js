import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Contacts = ({fullName, address, phone, email, id}) => {

    const {actions} = useContext(Context);
    
    // Eliminar contacto
    const Delete = () => {
        actions.deleteContact(id);
    };

  

    return (
        <div className="container border d-flex justify-content-center p-2">

            <div className="col-3">
                <img className="col-6 rounded-circle border border-secondary-subtle" 
                src="https://cdn.icon-icons.com/icons2/3690/PNG/512/user_profile_account_contact_icon_229464.png"></img>
            </div>
            <div className="col-6 d-flex flex-column g-2 text-start" >
                <div className="fs-4 p-1">{fullName}</div>
                <div className="text-secondary"><i className="fa-solid fa-phone me-2"></i>{phone}</div>
                <div className="text-secondary"><i className="fa-solid fa-envelope me-2"></i>{email}</div>
                <div className="text-secondary"><i className="fa-solid fa-location-dot me-2"></i>{address}</div>
            </div>
            <div className="row align-items-center">
            <div className="col-1 d-flex m-3 justify-content-end pe-0">

                {/* Editar contacto */}
            <Link to={`/edit-contact/` + id}>
                <i className="fa-solid fa-pencil me-0" style={{ color: 'black' }}></i> 
                </Link>
                
            </div>

            {/* Eliminar contacto */}
            <div className="col-1 d-flex m-3 justify-content-start ps-0">
            <span onClick={()=> {Delete(id)}} className="fas fa-trash-alt"></span>
            
            </div>
            </div>
        </div>
    )
}

export default Contacts;