function Contact() {
  return (
    <section id="contact" className="contact">
        


  <div className="contact-wrapper">

    <div className="contact-info">
      <h2>Let's Work Together</h2>

      <p>
        Have a project in mind or just want to say hi? even help 
        me improve my work? 
        Feel free to reach out. I'm always open to
        discussing new ideas and opportunities.
      </p>

      
      
    </div>


    <form
      className="contact-form"
      action="https://formspree.io/f/mgonvjvp"
      method="POST"
    >

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
      ></textarea>

      <button type="submit">
        Send Message
      </button>

    </form>

  </div>

</section>
  );
}

export default Contact;