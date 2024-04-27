import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";
import contact from "../../assets/contact.jpg";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    console.log(name, value);

    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      return toast.error("Please complete the form above");
    }

    setLoading(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Vasukumar Chanchapara",
          from_email: form.email,
          to_email: "vasucvh@gmail.com",
          message: form.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_API
      )
      .then(
        () => {
          setLoading(false);
          toast.success(`Successfully sent email.`);
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className="contact__form-group">
        <form onSubmit={submitHandler} ref={formRef} className="contact__form">
          <div className="contact__form-div">
            <h3>Name</h3>
            <input
              type="text"
              name="name"
              className="contact__form-input"
              placeholder="What's your good name?"
              onChange={handleChange}
              value={form.name}
            />
          </div>

          <div className="contact__form-div">
            <h3>Email</h3>
            <input
              type="email"
              name="email"
              className="contact__form-input"
              placeholder="What's your web address?"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="contact__form-div">
            <h3>Message</h3>
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="What you want to say?"
              value={form.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <img className="contact__img" src={contact} alt="" />
      </div>
    </section>
  );
};

export default Contact;
