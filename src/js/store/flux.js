import NewContact from "../views/addNewContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			contactList: [

			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: async () => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaAdriana",{ 
					method: 'GET'
				})

				const data = await response.json()
				setStore({
					contactList: data.contacts
				})
			},

			newContact: async (contact) => {
				
				const response = await fetch("https://playground.4geeks.com/contact/agendas/agendaAdriana/contacts",{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					  },
					body: JSON.stringify(contact)
				}) 
				
				const data = await response.json()
				getActions().loadContacts()
			},

			deleteContact: async (id) => {
				try {
					await fetch(`https://playground.4geeks.com/contact/agendas/agendaAdriana/contacts/${id}`, {
						method: 'DELETE',
					})
					getActions().loadContacts()
				} catch (error) {
					console.log(error)
					alert("Error al borrar contacto")
				}
			}, 

			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
