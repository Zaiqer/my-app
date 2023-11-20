import React, { Component } from "react";
import "./PersonalInfo.css";
import Contacts from "../ContactsComponent/Contacts";
import profile from '../images/PP_photo.jpg';

class PersonaInfo extends Component {
  render() {
    return (
      <div className="card">
        <div className="row g-0">
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">Daniel Moore</h5>
              <p className="card-text">Student</p>
            </div>
          </div>
          <div class="col-md-2">
            <img src={profile} class="img img-fluid" alt="Employee Photo" />
          </div>
        </div>
        <Contacts />
      </div>
    );
  }
}
export default PersonaInfo;
