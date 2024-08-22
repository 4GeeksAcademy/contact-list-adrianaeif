import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useContext } from "react";

import Contacts from "./contact.js";


export const Home = () => {

	const {store} = useContext(Context);

	return(
		<div className="text-center mt-5">
			<div className="container">

				{store.contactList.map((item, index) => {
					return (
						<Contacts
						
							key={item.id}
							fullname = {item.name}
							phone = {item.phone}
							email = {item.email}
							address = {item.address}

						/>
					)
				})}
			</div> 
			<div> 
				Editar
			</div>
			<div>
				Borrar
			</div>
		</div>
	)
};
