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
    setButtonClicked(true);

    try {
      const response = await fetch("https://formspree.io/f/mgonvjvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Error sending message.");
    }

    setTimeout(() => setButtonClicked(false), 200); // reset button class
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
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
  type="submit"
  className={buttonClicked ? "clicked" : ""}
  onTouchStart={() => setButtonClicked(true)} // mobile tap feedback
>
  Send Message
</button>
           
        </form>
      </div>
    </section>
  );
}

export default Contact;