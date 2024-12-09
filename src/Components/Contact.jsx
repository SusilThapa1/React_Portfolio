import React from "react";
import Button from "./Button";
import { LuMail } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "85682b90-738c-4f52-a64d-c412d1adfaea");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      toast.success(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex w-full flex-col items-center justify-center gap-5 px-4 pt-16 text-gray-300"
    >
      <h1 className="bg-custom-gradient bg-clip-text text-5xl text-transparent">
        Get In Touch
      </h1>
      <div className="flex flex-col items-start justify-between gap-10 px-10 md:flex-row">
        <div className="flex w-full flex-col gap-5 md:w-1/2">
          <h1 className="text-3xl font-semibold">Let's Talk</h1>
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
              <CiLocationOn className="animate-pulse text-xl" />
              <span>Bhaktapur,Nepal</span>
            </p>
          </div>
          <div className="flex items-center gap-5 text-xl text-gray-400">
            <a
              href="https://www.facebook.com/susil.thapa.3363334"
              aria-label="Connect in Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="hover:animate-bounce" />
            </a>
            <a
              href="https://instagram.com/shrish.thapa"
              aria-label="Connect in Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GrInstagram className="hover:animate-spin" />
            </a>
            <a
              href="https://wa.me/9825821503"
              aria-label="Connect in Whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:animate-pulse" />
            </a>
          </div>
        </div>

        <div className="j flex w-full md:w-1/2 md:items-center md:justify-center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-y-5 text-gray-300 sm:w-full lg:max-w-md"
          >
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="rounded-lg border-2 border-none bg-gray-600 px-4 py-3"
              placeholder="Enter your name"
              autoComplete="off"
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              name="email"
              id="email"
              className="rounded-lg border-none bg-gray-600 px-4 py-3"
              placeholder="Enter your email"
              autoComplete="off"
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Message..."
              className="h-40 resize-y overflow-hidden rounded-lg border-none bg-gray-600 px-4 py-3"
            />
            <a href="" className="w-full">
              <Button type="submit" text="Send Now" bg="custom-gradient" />
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
