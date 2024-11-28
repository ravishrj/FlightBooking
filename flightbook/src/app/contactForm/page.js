// const ContactForm = () => {

// return <div className="contact-form container">
// <div className="forms">
//   <form id="contactform" action="/contact-us">
//     <div className="fdetail-hdr">
//       <h3>Get in touch</h3>
//     </div>
//     <div className="flight-details">
//       <input
//         id="hdnFormType"
//         name="Formtype"
//         type="hidden"
//         defaultValue="ContactUs"
//       />
//       <div className="form-field">
//         <input
//           id="txtName"
//           className="nameError"
//           maxLength={50}
//           name="Name"
//           placeholder="Full Name*"
//           required=""
//           type="text"
//           defaultValue=""
//         />
//         <span id="error-name" className="error" />
//       </div>
//       <div className="form-field">
//         <input
//           id="txtEmail"
//           className="emailError"
//           name="Email"
//           placeholder="Email Address*"
//           required=""
//           type="email"
//           defaultValue=""
//         />
//         <span id="error-email" className="error" />
//       </div>
//       <div className="form-field">
//         <input
//           id="txtMobile"
//           className=" phoneError"
//           maxLength={12}
//           name="Phone"
//           onkeypress="return isNumberKeys(event)"
//           onpaste="return false"
//           placeholder="Mobile Number*"
//           required=""
//           type="tel"
//           defaultValue=""
//         />
//         <span id="error-phone" className="error" />
//       </div>
//       <div className="form-field">
//         <textarea
//           id="txtMessage"
//           className=""
//           cols={20}
//           maxLength={500}
//           name="Comment"
//           placeholder="Type Message Here*"
//           required=""
//           rows={2}
//           defaultValue={""}
//         />
//         <span id="error-comment" className="error" />
//       </div>
//       <div className="form-field btsc">
//         <button type="button" id="btnSubmit" className="g-orange">
//           Submit
//         </button>
//       </div>
//       <div id="thanksmsg" style={{ display: "none" }}>
//         <span className="right-thanks" />
//         Thank you! We will get in touch with you soon.
//         <span onclick="return Close()">X</span>
//       </div>
//     </div>
//   </form>
// </div>
// </div>

// }

// export default ContactForm;

"use client";

import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State to track form errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for success message visibility
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Mobile Number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    // If no errors, proceed to submit (simulate success here)
    if (Object.keys(newErrors).length === 0) {
      setShowSuccessMessage(true);
      toast.success("form submitted successfully");
      console.log("form data is submitted in contact", formData);
      // Here, you can call an API or handle form submission logic
      // For example, send the data to a backend
      // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
      //   .then(response => response.json())
      //   .catch(error => console.error('Error:', error));
      setTimeout(() => {
        closeSuccessMessage();
      }, 3000);
    }
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Reset the success message and form after a delay (optional)
  const closeSuccessMessage = () => {
    setShowSuccessMessage(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <div className="contact-form">
      <div className="forms">
        <form id="contactform" onSubmit={handleSubmit}>
          <div className="fdetail-hdr">
            <h3>Get in Touch with Us</h3>
          </div>
          <div className="flight-details black">
            <input
              id="hdnFormType"
              name="Formtype"
              type="hidden"
              value="ContactUs"
            />
            {/* Form Fields */}
            <div className="txt-form">
              <div className="f1">
                <div className="form-field">
                  <input
                    id="txtName"
                    className={errors.name ? "error" : ""}
                    name="name"
                    placeholder="Full Name*"
                    required
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
              </div>
              <div className="f1">
                <div className="form-field">
                  <input
                    id="txtEmail"
                    className={errors.email ? "error" : ""}
                    name="email"
                    placeholder="Email Address*"
                    required
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
              </div>
              <div className="f1">
                <div className="form-field">
                  <input
                    id="txtMobile"
                    className={errors.phone ? "error" : ""}
                    name="phone"
                    placeholder="Mobile Number*"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength="12"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="div-btn">
              <div className="form-field">
                <textarea
                  id="txtMessage"
                  name="message"
                  placeholder="Type Message Here*"
                  required
                  rows={2}
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error">{errors.message}</span>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="btn2">
              <div className="form-field btsc">
                <button type="submit" id="btnSubmit" className="g-orange">
                  Submit
                </button>
              </div>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <div id="thanksmsg">
                <span className="right-thanks" />
                Thank you! We will get in touch with you soon.
                <span
                  onClick={closeSuccessMessage}
                  style={{ cursor: "pointer" }}
                >
                  X
                </span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
