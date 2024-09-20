import reactDom from "react-dom";
import classes from "./notification.module.css";
import PropTypes from "prop-types";

export default function Notification({ title, message, status }) {
  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return reactDom.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

Notification.propTypes = {
  status: PropTypes.oneOf(["success", "error", "pending"]).isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
