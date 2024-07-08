import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ModalDelete } from "../component/modalDelete";

export const Contact = () => {
    const [state, setState] = useState({
        view: "none"
    });
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.createAgenda();
        actions.getAllContacts();
    }, []);

    function showModal() {
        setState({ view: "block" });
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center my-3">
                <Link class="btn btn-outline-success" to="/add-contact">New contact</Link>
            </div>

            {store.contacts?.map((contact) => {
                return (
                    <div className="card mb-3" key={contact.id} id="cuadrito">
                        <div className="row g-0 text-black">
                            <div className="col-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Unknown-person.gif" className="img-fluid rounded-circle p-2 m-3 mr-3" alt="..." />
                            </div>
                            <div className="col-7">
                                <div className="card-body">
                                    <h5 className="card-title">{contact?.name}</h5>
                                    <p className="card-text">{contact?.address}</p>
                                    <p className="card-text">{contact?.phone}</p>
                                    <p className="card-text">{contact?.email}</p>
                                </div>
                            </div>
                            <div className="col-2 d-flex">
                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        actions.seeContact(contact);
                                        navigate("/edit-contact");
                                    }}
                                >
                                    <i className="fa fa-pen p-2 m-3" />
                                </div>
                                <div
                                    className="cursor-pointer"
                                    onClick={() => {
                                        showModal();
                                        actions.setContactToDelete(contact);
                                    }}
                                >
                                    <i className="fa fa-trash p-2 m-3" />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            <ModalDelete stateModal={state} setModal={setState} />
        </div>
    );
};
