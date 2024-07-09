import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import injectContext from "./store/appContext";



import { AddContact } from "./views/addContact";
import { Contact } from "./views/contact";
import { EditContact } from "./views/editContact";


const Layout = () => {

	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Routes>
						<Route path="/" element={<Contact />} />
						<Route path="/add-contact" element={<AddContact />} />
						<Route path="*" element={<h1>404. Not found</h1>} />
						<Route path="/edit-contact" element={<EditContact />} />
					</Routes>

				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
