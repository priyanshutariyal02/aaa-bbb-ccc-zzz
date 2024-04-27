import React, { useRef, useState } from "react";
import { whatsapp, call } from "../assets/icons/icon";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert.jsx";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "The Grand View Resort",
          from_email: form.email,
          to_email: "thegrandviewresort@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);

            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <>
      <div className="max-w-3xl min-h-[100vh] mx-auto sm:p-16 pb-10 !pt-[10rem] px-8">
        {alert.show && <Alert {...alert} />}
        <div className="flex justify-center">
          <h1 className="font-bold text-[3rem] ">Get in Touch</h1>
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7 mt-16"
          >
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                onChange={handleChange}
                value={form.name}
                placeholder="John"
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                onChange={handleChange}
                value={form.email}
                placeholder="xyz@gmail.com"
              />
            </label>

            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows="4"
                className="textarea"
                onChange={handleChange}
                value={form.message}
                placeholder="Write your thoughts here..."
              />
            </label>
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="flex gap-5 justify-center items-center mt-11">
          <hr className="border-gray-400 w-[50%] mx-auto" />
          <span className="text-gray-500 font-semibold">OR</span>
          <hr className="border-gray-400 w-[50%] mx-auto" />
        </div>
        {/* Social media */}
        <div className="w-full h-[auto] flex flex-col my-10 social-links">
          <p className="font-semibold">Direct contact:</p>
          <div className="w-full p-5 flex gap-[5rem]  items-center justify-start mt-[3rem] social-icons">
            <a href="https://wa.me/917906075750" target="_blank">
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>

            <a href="tel:917906075750">
              <img
                src={call}
                alt="whatsapp"
                className="w-[4rem] h-[4rem] hover:scale-125 duration-200"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
