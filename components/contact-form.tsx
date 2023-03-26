import React, { useState } from "react";
import { MailDataRequired } from "@sendgrid/mail";
import { SendGridService } from "@/lib/sendgrid.service";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const sendGridService = new SendGridService();
    const test: MailDataRequired = {
      text: message,
      from: email,
    };
    const sent = await sendGridService.sendEmail(test);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      {sent && <p>Message sent!</p>}
      {error && <p>Error sending message. Please try again later.</p>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
