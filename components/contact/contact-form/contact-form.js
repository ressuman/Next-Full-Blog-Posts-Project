//import { sendMessageHandler } from "@/helpers/contact/send-message";
import classes from "./contact-form.module.css";
import { useState } from "react";

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const emailIsValid = (email) => /\S+@\S+\.\S+/.test(email);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setSuccess(false);
    setError(null);

    if (!emailIsValid(enteredEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (enteredFullName.trim() === "" || enteredMessage.trim() === "") {
      setError("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    const messageData = {
      email: enteredEmail,
      name: enteredFullName,
      message: enteredMessage,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(messageData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong!");
      }

      setSuccess(true);
      setEnteredEmail("");
      setEnteredFullName("");
      setEnteredMessage("");
    } catch (err) {
      setError(err.message || "Failed to send the message.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your FullName</label>
            <input
              type="text"
              name="name"
              id="name"
              value={enteredFullName}
              onChange={(event) => setEnteredFullName(event.target.value)}
              required
            />
          </div>
        </div>

        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
            required
          ></textarea>
        </div>

        <div className={classes.actions}>
          {!isLoading && <button type="submit">Send Message</button>}
          {isLoading && <p>Sending message...</p>}
        </div>
        {error && <p className={classes.error}>{error}</p>}
        {success && (
          <p className={classes.success}>Message sent successfully!</p>
        )}
      </form>
    </section>
  );
}
