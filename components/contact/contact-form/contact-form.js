//import { sendMessageHandler } from "@/helpers/contact/send-message";
import { validateForm } from "@/helpers/contact/validate-form";
import classes from "./contact-form.module.css";
import { useState, useEffect } from "react";
import { sendMessage } from "@/helpers/contact/send-message";
import Notification from "../ui/notification";

// export default function ContactForm() {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [enteredFullName, setEnteredFullName] = useState("");
//   const [enteredMessage, setEnteredMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const emailIsValid = (email) => /\S+@\S+\.\S+/.test(email);

//   async function sendMessageHandler(event) {
//     event.preventDefault();

//     setSuccess(false);
//     setError(null);

//     if (!emailIsValid(enteredEmail)) {
//       setError("Please enter a valid email address.");
//       return;
//     }

//     if (enteredFullName.trim() === "" || enteredMessage.trim() === "") {
//       setError("Please fill in all fields.");
//       return;
//     }

//     setIsLoading(true);

//     const messageData = {
//       email: enteredEmail,
//       name: enteredFullName,
//       message: enteredMessage,
//     };

//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         body: JSON.stringify(messageData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Something went wrong!");
//       }

//       setSuccess(true);
//       setEnteredEmail("");
//       setEnteredFullName("");
//       setEnteredMessage("");
//     } catch (err) {
//       setError(err.message || "Failed to send the message.");
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return (
//     <section className={classes.contact}>
//       <h1>How can I help you?</h1>

//       <form className={classes.form} onSubmit={sendMessageHandler}>
//         <div className={classes.controls}>
//           <div className={classes.control}>
//             <label htmlFor="email">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               value={enteredEmail}
//               onChange={(event) => setEnteredEmail(event.target.value)}
//               required
//             />
//           </div>
//           <div className={classes.control}>
//             <label htmlFor="name">Your FullName</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               value={enteredFullName}
//               onChange={(event) => setEnteredFullName(event.target.value)}
//               required
//             />
//           </div>
//         </div>

//         <div className={classes.control}>
//           <label htmlFor="message">Your Message</label>
//           <textarea
//             name="message"
//             id="message"
//             rows="5"
//             value={enteredMessage}
//             onChange={(event) => setEnteredMessage(event.target.value)}
//             required
//           ></textarea>
//         </div>

//         <div className={classes.actions}>
//           {!isLoading && <button type="submit">Send Message</button>}
//           {isLoading && <p>Sending message...</p>}
//         </div>
//         {error && <p className={classes.error}>{error}</p>}
//         {success && (
//           <p className={classes.success}>Message sent successfully!</p>
//         )}
//       </form>
//     </section>
//   );
// }

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (
      requestStatus === "success" ||
      requestStatus === "error" ||
      success ||
      error
    ) {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setSuccess(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus, success, error]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    setSuccess(false);
    setError(null);
    setIsLoading(true);
    setRequestStatus("pending");

    const validationResult = validateForm({
      enteredEmail,
      enteredFullName,
      enteredMessage,
    });

    if (!validationResult.isValid) {
      setError(validationResult.message);
      setRequestStatus("error");
      setIsLoading(false);
      return;
    }

    try {
      await sendMessage({ enteredEmail, enteredFullName, enteredMessage });
      setSuccess("Message sent successfully!");
      setRequestStatus("success");

      setEnteredEmail("");
      setEnteredFullName("");
      setEnteredMessage("");
    } catch (error) {
      setError(error.message);
      setRequestStatus("error");
    } finally {
      setIsLoading(false);
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending...",
      message: "Your message is on its way!",
    };
  }

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }

  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: error,
    };
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
            <label htmlFor="name">Your Full Name</label>
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
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}
