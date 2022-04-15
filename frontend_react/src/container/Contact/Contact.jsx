import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { ImMobile } from "react-icons/im";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Contact.scss";

import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xjvlaozg");
  if (state.succeeded) {
    return <h3 className="head-text">Thank you for getting in touch!</h3>;
  }
  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__contact-cards">
        <div className="app__contact-card ">
          <MdEmail></MdEmail>
          <a href="mailto:henriettazarvou@gmailcom" className="p-text">
            henriettazarvou@gmail.com
          </a>
        </div>
        <div className="app__contact-card">
          <ImMobile></ImMobile>
          <a href="tel:+ (357) 96819605" className="p-text">
            +(357) 96819605
          </a>
        </div>
      </div>

      <form className="app__contact-form app__flex" onSubmit={handleSubmit}>
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
          />
        </div>

        <div className="app__flex">
          <input
            className="p-text"
            type="email"
            placeholder="Your Email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" className=" p-text" disabled={state.submitting}>
          {"Send Message"}
        </button>
      </form>
    </>
  );
}

export default AppWrap(
  MotionWrap(Contact, "app__contact"),
  "contact",
  "app__whitebg"
);
