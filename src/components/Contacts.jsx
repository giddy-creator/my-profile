import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger button click animation
    setButtonClicked(true);

    // Check if any field is empty
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields before submitting.");
      setTimeout(() => setButtonClicked(false), 300); // reset button color
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mgonvjvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // clear form
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Error sending message.");
    }

    // Reset button color after a short delay
    setTimeout(() => setButtonClicked(false), 300);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Let's Work Together</h2>
          <p>
            Have a project in mind or just want to say hi? Even help 
            me improve my work? Feel free to reach out. I'm always open to
            discussing new ideas and opportunities.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className={buttonClicked ? "clicked" : ""}
            onTouchStart={() => setButtonClicked(true)} // mobile touch
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;