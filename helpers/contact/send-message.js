export async function sendMessage({
  enteredEmail,
  enteredFullName,
  enteredMessage,
}) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({
      email: enteredEmail,
      name: enteredFullName,
      message: enteredMessage,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  return response.json();
}
