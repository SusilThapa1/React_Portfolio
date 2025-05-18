import { useState } from "react";
import Button from "./Button";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [errors, setErrors] = useState({});

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
    const form = event.target; // Get the form element
    const formData = Object.fromEntries(new FormData(form));

    const newErrors = validate(formData);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes
    formData.access_key = import.meta.env.VITE_FORM_ACCESS_KEY;

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => res.json());
    console.log(res);

    if (res.success) {
      toast.success(res.message);
      form.reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-5 px-4 pt-16 text-gray-300"
    >
      <h1 className="text-5xl text-cyan-500">Get In Touch</h1>
      <div className="flex flex-col items-start justify-between gap-10 px-10 md:flex-row">
        <div className="flex w-full flex-col gap-5 md:w-1/2">
          <h1 className="text-3xl font-semibold text-cyan-500">Let's Talk</h1>
          <p className="w-full text-justify md:w-2/3">
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
              <MdOutlinePhone className="text-xl" /> <span>9825821503</span>
            </p>

            <p className="flex items-center gap-3">
              <CiLocationOn className="text-xl hover:animate-pulse" />
              <span>Bhaktapur, Nepal</span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-xl text-gray-400">
            <a
              href="https://www.facebook.com/susil.thapa.3363334"
              aria-label="Connect on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:animate-bounce" />
            </a>
            <a
              href="https://instagram.com/shrish.thapa"
              aria-label="Connect on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram className="hover:animate-spin" />
            </a>
            <a
              href="https://wa.me/9825821503"
              aria-label="Connect on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:animate-pulse" />
            </a>
          </div>
        </div>
        <div className="flex w-full md:w-1/2 md:items-center md:justify-center">
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-y-5 text-gray-300 sm:w-4/5 lg:max-w-md"
          >
            <label htmlFor="name" className="text-cyan-400">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg border-2 border-none bg-gray-600 px-4 py-3"
              placeholder="Enter your name"
              autoComplete="on"
            />
            {errors.name && (
              <span className="text-sm text-red-500">{errors.name}</span>
            )}
            <label htmlFor="email" className="text-cyan-400">
              Your Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="rounded-lg border-none bg-gray-600 px-4 py-3"
              placeholder="Enter your email"
              autoComplete="on"
            />
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email}</span>
            )}
            <label htmlFor="message" className="text-cyan-400">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              className="h-40 resize-y overflow-hidden rounded-lg border-none bg-gray-600 px-4 py-3"
            />
            {errors.message && (
              <span className="text-sm text-red-500">{errors.message}</span>
            )}
            <div>
              <Button type="submit" text="Send Now" bg="custom-gradient" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
