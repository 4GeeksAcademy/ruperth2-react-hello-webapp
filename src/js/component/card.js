import React from "react";
import './Card.css';

export const Card = (props) => {

    const handleDeleteClick = () => {

        if (props.onDelete) {
            props.onDelete(props.id);
        }
    };

    return (
        <div className="card mb-3" key={props.id}>
            <div className="row g-0 text-black">
                <div className="col-3">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Unknown-person.gif" className="img-fluid rounded-circle p-2 m-3 mr-3" alt="..."/>
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.address}</p>
                        <p className="card-text">{props.phone}</p>
                        <p className="card-text">{props.email}</p>
                    </div>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center">
                    <div className="icon-wrapper"><i className="fa fa-pen p-2 m-3"/></div>
                    <div className="icon-wrapper" onClick={handleDeleteClick}><i className="fa fa-trash p-2 m-3"/></div>
                </div>
            </div>
        </div>
    );
};
