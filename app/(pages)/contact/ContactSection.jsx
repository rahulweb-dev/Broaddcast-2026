"use client"
import Image from "next/image"
import { MapPin, MessageCircle, Phone, User } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-[#f3f3f3]">

      {/* ================= TOP INFO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 sm:mb-16 text-[#1a1a1a] leading-snug">
          We’re here to help you and answer
          <br className="hidden sm:block" />
          any questions you might have.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin size={32} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Office location</h4>
            <p className="text-gray-600 text-sm mt-2">
              Broaddcast Digital Agency <br />
              Hyderabad, Telangana <br />
              India
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <MessageCircle size={32} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Send a message</h4>
            <p className="text-gray-600 text-sm mt-2">
              <a href="mailto:info@broaddcast.com" className="hover:underline">
                info@broaddcast.com
              </a>
              <br />
              <a href="mailto:hr@broaddcast.com" className="hover:underline">
                hr@broaddcast.com
              </a>
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <Phone size={32} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Let's talk with us</h4>
            <p className="text-gray-600 text-sm mt-2">
              <a href="tel:+919100155555" className="hover:underline">
                +91 9100155555
              </a>
              <br />
              Mon - Sat (9:00 AM - 6:00 PM)
            </p>
          </div>

          {/* Careers */}
          <div className="flex flex-col items-center">
            <User size={32} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Join our team</h4>
            <p className="text-gray-600 text-sm mt-2">
              We are hiring! <br />
              Send your resume to HR.
            </p>
          </div>

        </div>
      </div>

      {/* ================= MAP + FORM SECTION ================= */}
      <div className="grid lg:grid-cols-2">

        {/* Map */}
        <div className="h-[350px] sm:h-[450px] lg:h-[600px]">
          <iframe
            src="https://maps.google.com/maps?q=Broaddcast%20Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Side */}
        <div className="relative bg-[#D0D5FF] flex items-center justify-center py-12 sm:py-20 px-6 sm:px-10">

          {/* Circular Image */}
          <div className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2">
            <Image
              src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/04/demo-digital-agency-contact-01.png.webp"
              width={180}
              height={180}
              alt="contact"
              className="rounded-full object-cover"
            />
          </div>

          <div className="w-full max-w-md">

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-10 text-[#1a1a1a]">
              Say Hello!
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Enter your name*"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Enter your email*"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none text-sm sm:text-base"
              />

              <textarea
                placeholder="Enter your message"
                rows="3"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none text-sm sm:text-base"
              ></textarea>

              <button className="w-full bg-[#1a1a1a] text-white py-3 text-sm font-semibold hover:opacity-90 transition">
                SEND MESSAGE
              </button>

              <p className="text-xs text-gray-700">
                I understand that my data will be held securely in accordance with the privacy policy.
              </p>

            </form>

          </div>
        </div>

      </div>

    </section>
  )
}