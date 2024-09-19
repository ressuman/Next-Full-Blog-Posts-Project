export function validateForm({
  enteredEmail,
  enteredFullName,
  enteredMessage,
}) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(enteredEmail)) {
    return {
      isValid: false,
      message: "Please enter a valid email address.",
    };
  }

  if (!enteredEmail.includes("@") || !enteredEmail.includes(".")) {
    return {
      isValid: false,
      message: "Please enter a valid email address.",
    };
  }

  if (enteredFullName.trim().length === 0) {
    return {
      isValid: false,
      message: "Full name cannot be empty.",
    };
  }

  if (enteredMessage.trim().length === 0) {
    return {
      isValid: false,
      message: "Message cannot be empty.",
    };
  }

  return {
    isValid: true,
  };
}
