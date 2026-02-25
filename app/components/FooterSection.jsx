"use client"

export default function FooterSection() {
  return (
    <footer className="bg-[#f3f3f3] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-16">

          {/* Column 1 - Logo & Social */}
          <div>
            <div className="bg-[#1a1a1a] text-white w-20 h-12 flex items-center justify-center text-lg font-semibold mb-16">
              DA
            </div>

            <div className="flex gap-6 text-[#1a1a1a] font-medium">
              <span>Fb.</span>
              <span>Ig.</span>
              <span>Tw.</span>
              <span>Be.</span>
            </div>
          </div>

          {/* Column 2 - Locations */}
          <div className="space-y-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Rotterdam
              </p>
              <p className="font-semibold text-[#1a1a1a]">
                Crafto digital media.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Graaf florisstraat 22A,<br />
                Netherlands.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Barcelona
              </p>
              <p className="font-semibold text-[#1a1a1a]">
                Crafto digital media.
              </p>
              <p className="text-gray-600 leading-relaxed">
                365 Grand via de coarts,<br />
                Barcelona.
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
                Interested in working with us?
              </p>
              <p className="font-semibold underline text-[#1a1a1a]">
                hello@yourdomain.com
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wide mb-3">
                Work with us
              </p>
              <p className="text-gray-600 mb-2">
                Looking for a job opportunity?
              </p>
              <p className="font-semibold underline text-[#1a1a1a]">
                hr@yourdomain.com
              </p>
            </div>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide mb-6">
              Sign up for the newsletter
            </p>

            <div className="relative mb-6">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full border border-gray-300 px-4 py-3 bg-transparent focus:outline-none"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                ✉
              </span>
            </div>

            <p className="text-gray-600 flex items-center gap-2 text-sm">
              🤝 Protecting your privacy
            </p>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-20 pt-8 flex flex-col md:flex-row justify-between text-gray-600 text-sm">

          <p>
            © 2025 Crafto is Proudly Powered by{" "}
            <span className="underline text-[#1a1a1a] font-medium">
            Broaddcast
            </span>
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Privacy policy</span>
            <span>Terms and conditions</span>
            <span>Copyright</span>
          </div>

        </div>
      </div>
    </footer>
  )
}