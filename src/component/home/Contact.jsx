"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen px-[4vw] py-[10vh] md:py-[12vh] relative"
    >
      {/* Section Header */}
      <div className="text-center mb-[7vh]">
        <span className="text-[#3298c9] font-semibold text-[2.5vh] md:text-[1.2vw] tracking-wider">
          GET IN TOUCH
        </span>
        <h2 className="text-[5vh] md:text-[3vw] font-bold text-white mt-[2vh]">
          Let’s <span className="">Connect</span>
        </h2>
        <p className="text-[2.5vh] md:text-[1.2vw] text-gray-300 mx-auto mt-[2.5vh]">
          Have a project in mind? Drop us a message and we’ll help you grow
          with SEO & SMM strategies tailored for your business.
        </p>
      </div>

      {/* Contact Section Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vh]  mx-auto">
        {/* Contact Info */}
        <div className="space-y-[4vh]">
          {[
            {
              icon: <Mail className="w-[4vh] h-[4vh] md:w-[2vw] md:h-[2vw] text-[#3298c9] mt-[0.5vh]" />,
              title: "Email",
              value: "support@yourdomain.com",
            },
            {
              icon: <Phone className="w-[4vh] h-[4vh] md:w-[2vw] md:h-[2vw] text-[#3298c9] mt-[0.5vh]" />,
              title: "Phone",
              value: "+91 98765 43210",
            },
            {
              icon: <MapPin className="w-[4vh] h-[4vh] md:w-[2vw] md:h-[2vw] text-[#3298c9] mt-[0.5vh]" />,
              title: "Address",
              value: "New Delhi, India",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-[4vh] flex items-start gap-[2.5vh]"
            >
              {item.icon}
              <div>
                <h4 className="text-[2.5vh] md:text-[1.2vw] font-semibold text-white">
                  {item.title}
                </h4>
                <p className="text-[2vh] md:text-[1vw] text-gray-300">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-[5vh] space-y-[3.5vh] shadow-lg">
          {[
            { label: "Your Name", type: "text", placeholder: "Enter your name" },
            { label: "Email", type: "email", placeholder: "Enter your email" },
          ].map((field, idx) => (
            <div key={idx}>
              <label className="block text-gray-200 text-[2vh] md:text-[1vw] mb-[1.5vh]">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="w-full px-[2.5vh] py-[2vh] rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3298c9] text-[2vh] md:text-[1vw]"
              />
            </div>
          ))}

          <div>
            <label className="block text-gray-200 text-[2vh] md:text-[1vw] mb-[1.5vh]">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message"
              className="w-full px-[2.5vh] py-[2vh] rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3298c9] text-[2vh] md:text-[1vw]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-[2.5vh] md:py-[1.2vw] bg-[#3298c9] hover:bg-[#297bb0] text-white font-semibold rounded-lg text-[2.2vh] md:text-[1.1vw] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
