import React, { Component } from "react";
import "./Contacts.css";
class Contacts extends Component {
    render() {
      return (
        <div className="contact">
            <i class="fa-solid fa-envelope"></i><p className="email">danielmoore@gmail.com</p>
            <i class="fa-solid fa-phone"></i><p className="phone">+1111111111</p>
        </div>
      );
    }
  }
  export default Contacts;