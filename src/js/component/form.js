import React, { Component } from "react";



export const Form = () => (
  <form>
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Full name</label>
    <input type="email" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Full name"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPhone" className="form-label">Phone</label>
    <input type="phone" className="form-control" id="exampleInputPhone" placeholder="Enter phone"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputAddress" className="form-label">Password</label>
    <input type="address" className="form-control" id="exampleInputAddress" placeholder="Enter address"/>
  </div>
    <div>
        <button type="submit" className="btn btn-primary">Save</button>
        <a href="">Get back to contacts</a>
    </div>
  </form>
);