import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t7mhap7", // ← REPLACE THIS
        "template_7ue6qhr", // ← REPLACE THIS
        form.current,
        "30Pn5xybhdRH8zs6C" // ← REPLACE THIS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 bg-white text-black px-6 flex justify-center items-center"
    >
      <div>
        {" "}
        <h2 className="text-3xl font-semibold text-center mb-6">Contact</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl mx-auto flex flex-col gap-4"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
