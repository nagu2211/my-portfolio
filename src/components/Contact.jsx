import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../Variants";
import { Toaster, toast } from "react-hot-toast";
import fotoPerfil from "../assets/fotoperfil.jpg";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  function toaster() {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-10 w-10 rounded-full" src={fotoPerfil} alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Santiago Espindola
              </p>
              <p className="mt-1 text-sm text-gray-500">
                🤗 Thank you for contacting me, I will get in touch with you
                shortly!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_r12btvq",
        "template_stzhef6",
        form.current,
        "O8YopqvjzFkKQrExo"
      )
      .then(
        (result) => {
          toaster();
        },
        (error) => {
          toast.error("Something went wrong.");
          console.log(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <section className="py-16 lg:section" id="contact">
      {loading && (
        <div className="text-black h-screen flex absolute right-[50%] pt-[15px]">
          <div className="loadingspinner">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
            <div id="square5"></div>
          </div>
        </div>
      )}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4
                className="text-xl uppercase text-accent
              font-medium mb-2 tracking-wide"
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 text-black dark:text-white">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border border-[#414244] dark:border-[#e5e7eb] rounded-2xl flex flex-col gap-y-6
          pb-24 p-6 items-start"
            onSubmit={sendEmail}
            ref={form}
          >
            <input
              className="bg-transparent border-b border-[#414244] dark:border-[#e5e7eb] text-black py-3 outline-none w-full dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              className="bg-transparent border-b border-[#414244] dark:border-[#e5e7eb] text-black py-3 outline-none w-full dark:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              className="bg-transparent border-b border-[#414244] dark:border-[#e5e7eb] text-black py-12 outline-none 
            w-full  dark:text-white focus:border-accent 
            transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            {loading ? (
              <div className="spinner">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            ) : (
              <button className="btn btn-lg" type="submit">
                Send Message
              </button>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
