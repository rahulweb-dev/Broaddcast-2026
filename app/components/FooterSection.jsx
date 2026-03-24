"use client"

import Link from "next/link"
import Image from "next/image"

export default function FooterSection() {
  return (
    <footer className="bg-[#f3f3f3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* Column 1 - Logo & Social */}
          <div>
            <Link href="/" className="inline-block mb-12 bg-black rounded-3xl">
              <Image
                src="/bc-logo.webp"
                alt="Broaddcast Logo"
                width={120}
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            <div className="flex gap-6 text-[#1a1a1a] font-medium">
              <Link href="#">Fb.</Link>
              <Link href="#">Ig.</Link>
              <Link href="#">Ln.</Link>
              <Link href="#">Tw.</Link>
            </div>
          </div>

          {/* Column 2 - Locations */}
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Hyderabad
              </p>
              <p className="font-semibold text-[#1a1a1a]">
                Broaddcast Digital Agency
              </p>
              <p className="text-gray-600 leading-relaxed">
                Hitech City,<br />
                Hyderabad, India.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Remote
              </p>
              <p className="font-semibold text-[#1a1a1a]">
                Global Clients
              </p>
              <p className="text-gray-600 leading-relaxed">
                Serving clients across India,<br />
                UAE, and USA.
              </p>
            </div>
          </div>

          {/* Column 3 - Emails */}
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Work inquiries
              </p>
              <p className="text-gray-600 mb-2">
                Let’s build something amazing together.
              </p>
              <a
                href="mailto:hello@broaddcast.com"
                className="font-semibold underline text-[#1a1a1a]"
              >
                hello@broaddcast.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Careers
              </p>
              <p className="text-gray-600 mb-2">
                Join our growing creative team.
              </p>
              <a
                href="mailto:careers@broaddcast.com"
                className="font-semibold underline text-[#1a1a1a]"
              >
                careers@broaddcast.com
              </a>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-6">
              Subscribe for updates
            </p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full border border-gray-300 px-4 py-3 bg-transparent focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black">
                ✉
              </button>
            </div>

            <p className="text-gray-600 flex items-center gap-2 text-sm">
              🔒 We respect your privacy
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-20 pt-8 flex flex-col md:flex-row justify-between text-gray-600 text-sm">

          <p>
            © {new Date().getFullYear()} Broaddcast. All rights reserved.
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Sitemap</Link>
          </div>

        </div>
      </div>
    </footer>
  )
}