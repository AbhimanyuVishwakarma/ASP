import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
  errors: { name: "", email: "", message: "" }, // Error state to handle form validation
};

export const Contact = (props) => {
  const [{ name, email, message, errors }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  // Form validation function
  const validateForm = () => {
    let formErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email is invalid";
      isValid = false;
    }
    if (!message.trim()) {
      formErrors.message = "Message is required";
      isValid = false;
    }

    setState((prevState) => ({ ...prevState, errors: formErrors }));
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Replace with actual Service ID, Template ID, and Public Key
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={handleChange}
                      />
                      {errors.name && <p className="help-block text-danger">{errors.name}</p>}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleChange}
                      />
                      {errors.email && <p className="help-block text-danger">{errors.email}</p>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <p className="help-block text-danger">{errors.message}</p>}
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa-regular fa-envelope"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
            <div className="contact-item">
  <p>
    <span>
      <i className="fab fa-linkedin"></i> LinkedIn
    </span>{" "}
    <a href={props.data && props.data.linkedin ? props.data.linkedin : "#"} target="_blank" rel="noopener noreferrer">
      Visit LinkedIn
    </a>
  </p>
</div>
<div className="contact-item">
  <p>
    <span>
      <i className="fab fa-whatsapp"></i> WhatsApp
    </span>{" "}
    <a href={props.data && props.data.whatsapp ? `https://wa.me/${props.data.whatsapp}` : "#"} target="_blank" rel="noopener noreferrer">
      Chat on WhatsApp
    </a>
  </p>
</div>

          </div>

          <div className="col-md-12">
            <div className="row">
              {/* <div className="social">
                <ul>
                <li>
  <a href={props.data ? `https://${props.data.facebook}` : "/"}>
    <i className="fab fa-facebook-f"></i>
  </a>
</li>
<li>
  <a href={props.data ? `https://${props.data.twitter}` : "/"}>
    <i className="fab fa-twitter"></i>
  </a>
</li>
<li>
  <a href={props.data ? `https://${props.data.youtube}` : "/"}>
    <i className="fab fa-youtube"></i>
  </a>
</li>


                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; ASP SOLUTIONS PRIVATE LIMITED{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              ASP SOL
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
