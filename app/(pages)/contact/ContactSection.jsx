"use client"
import Image from "next/image"
import { MapPin, MessageCircle, Phone, User } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="bg-[#f3f3f3]">

      {/* ================= TOP INFO SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-semibold mb-16 text-[#1a1a1a]">
          We’re here to help you and answer
          <br />
          any questions you might have.
        </h2>

        <div className="grid md:grid-cols-4 gap-12">

          {/* Item */}
          <div className="flex flex-col items-center">
            <MapPin size={36} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Office location</h4>
            <p className="text-gray-600 text-sm mt-2">
              27 Eden walk eden center,<br />
              Orchard view, Paris,<br />
              France
            </p>
          </div>

          <div className="flex flex-col items-center">
            <MessageCircle size={36} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Send a message</h4>
            <p className="text-gray-600 text-sm mt-2">
              info@yourdomain.com<br />
              hr@yourdomain.com
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Phone size={36} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Let's talk with us</h4>
            <p className="text-gray-600 text-sm mt-2">
              Phone: 1-800-222-000<br />
              Fax: 1-800-222-002
            </p>
          </div>

          <div className="flex flex-col items-center">
            <User size={36} strokeWidth={1.5} />
            <h4 className="font-semibold mt-4">Join our team</h4>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum is simply the
              <br /> printing typesetting.
            </p>
          </div>

        </div>
      </div>

      {/* ================= MAP + FORM SECTION ================= */}
      <div className="grid lg:grid-cols-2">

        {/* Map */}
        <div className="h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Form Side */}
        <div className="relative bg-[#e5c1b5] flex items-center justify-center py-20 px-10">

          {/* Circular Image */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2">
            <Image
              src="https://crafto.themezaa.com/digital-agency/wp-content/uploads/sites/34/2024/04/demo-digital-agency-contact-01.png.webp"
              width={200}
              height={200}
              alt="."
              className="rounded-full object-cover"
            />
          </div>

          <div className="w-full max-w-md">

            <h3 className="text-4xl font-semibold mb-10 text-[#1a1a1a]">
              Say salve!
            </h3>

            <form className="space-y-8">

              <input
                type="text"
                placeholder="Enter your name*"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none"
              />

              <input
                type="text"
                placeholder="https://crafto.themezaa.com/digital-agency/contact/#"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none"
              />

              <textarea
                placeholder="Enter your message"
                rows="3"
                className="w-full bg-transparent border-b border-[#1a1a1a] py-2 outline-none"
              ></textarea>

              <button className="w-full bg-[#1a1a1a] text-white py-3 text-sm font-semibold">
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