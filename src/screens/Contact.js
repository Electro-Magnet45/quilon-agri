import React from "react";
import "./Contact.css";
import contact_icon from "../assets/undraw_contact.svg";
import whatsapp_icon from "../assets/whatsapp_icon.svg";
import gmail_icon from "../assets/gmail_icon.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact_container">
        <div className="about-cont_title">
          <div className="about-cont_text">
            <h1>Contact Us</h1>
          </div>
          <img src={contact_icon} alt="" />
        </div>
        <div className="contact-cont_body">
          <div style={{ fontSize: 22 }}>
            <span>For Orders</span> :- Please inform through WhatsApp No.
            <br />
            <br />
            <span>Payment Mode</span> :- Through Online, Details will be shared
            through WhatsApp.
          </div>
          <div className="contact-body_info">
            <div>
              <img src={whatsapp_icon} alt="" />
              <div style={{ fontSize: 20, marginLeft: 10 }}>
                WhatsApp No:{" "}
                <span
                  onClick={() =>
                    window.open(
                      "https://api.whatsapp.com/send?phone=+917012874039",
                      "_blank"
                    )
                  }
                >
                  +91 7012874039
                </span>
              </div>
            </div>
            <div>
              <img src={gmail_icon} alt="" />
              <div style={{ fontSize: 20, marginLeft: 10 }}>
                Gmail:{" "}
                <span
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=askmpta@gmail.com",
                      "_blank"
                    )
                  }
                >
                  askmpta@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
