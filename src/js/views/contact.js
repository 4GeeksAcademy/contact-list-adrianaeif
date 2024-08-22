import React from "react";

const Contacts = ({fullname, imagen, address, phone, email}) => {
    return (
        <div className=" container d-flex border-2 gap-3 justify-content-center">
            <div>
                {fullname}
                {imagen}
                {address}
                {phone}
                {email}
            </div>
            <div>Editar</div>
            <div>Borrar</div>
        </div>
    )
}

export default Contacts;