import { useState, useRef } from "react";
import { LuMail } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(formRef.current));

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        formData,
        publicKey,
      );

      console.log("EmailJS result:", result.text);
      toast.success("Message has been sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error.text || error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-5 py-10"
    >
      <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-semibold text-transparent">
        Get In Touch
      </h1>
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
        {/* Left contact info */}
        <div className="flex w-full flex-col gap-5 text-justify text-sm leading-relaxed text-gray-600 md:text-lg">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-2xl font-medium text-transparent">
            Let's Talk
          </h1>
          <p className="">
            Let’s connect! Whether you have a question, an opportunity, new
            projects, or just want to chat, I’d love to hear from you. Feel free
            to reach out via email or social media—I’ll get back to you as soon
            as possible!
          </p>
          <div className="flex flex-col gap-5">
            <p className="flex items-center gap-3">
              <LuMail className="text-xl" /> <span>shrishthapaa@gmail.com</span>
            </p>

            <p className="flex items-center gap-3">
              <FaLocationDot className="text-xl" />
              <span>Bhaktapur, Nepal</span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-xl text-gray-800">
            <a
              href="https://www.facebook.com/susil.thapa.3363334"
              aria-label="Connect on Facebook"
              title="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                size={25}
                className="transition-colors duration-300 hover:text-[#0884FF]"
              />
            </a>
            <a
              href="https://github.com/SusilThapa1"
              aria-label="Github"
              title="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                className="transition-colors duration-300 hover:text-gray-500"
              />
            </a>
            <a
              href="https://wa.me/9825821503"
              aria-label="Connect on WhatsApp"
              title="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={25}
                className="transition-colors duration-300 hover:text-green-600"
              />
            </a>
          </div>
        </div>

        {/* Right form */}
        <div className="flex w-full gap-5 md:items-center md:justify-center">
          <form
            ref={formRef}
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-y-3 text-sm leading-relaxed md:text-lg"
          >
            <label
              htmlFor="name"
              className="bg-gradient-to-t from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg border border-yellow-50 bg-transparent px-3 py-2 shadow-lg outline-none"
              placeholder="Enter your name"
              autoComplete="on"
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name}</span>
            )}

            <label
              htmlFor="email"
              className="bg-gradient-to-b from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="rounded-lg border border-yellow-50 bg-transparent px-3 py-2 shadow-lg outline-none"
              placeholder="Enter your email"
              autoComplete="on"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}

            <label
              htmlFor="message"
              className="bg-gradient-to-t from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here..."
              className="h-40 resize-y overflow-hidden rounded-lg border border-yellow-50 bg-transparent px-3 py-2 shadow-lg outline-none"
            />
            {errors.message && (
              <span className="text-sm text-red-500">{errors.message}</span>
            )}

            <div className="group flex w-max cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 bg-gradient-to-r from-cyan-400 to-blue-600 p-2 text-base text-gray-200 transition-all duration-500 hover:scale-105">
              <button type="submit">Send Message</button>
              <IoIosSend className="transition-all duration-500 group-hover:rotate-45" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
