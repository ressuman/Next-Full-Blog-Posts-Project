import ContactForm from "@/components/contact/contact-form/contact-form";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Please reach out to me and send me your messages"
        />
      </Head>
      <ContactForm />;
    </>
  );
}
