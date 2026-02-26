import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-30 site-nav bg-white/10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold hover:underline">Home</Link>
            <Link href="/project" className="text-sm font-bold hover:underline">Projects</Link>
            <Link href="/cv" className="text-sm font-bold hover:underline">CV</Link>
            <Link href="/contact" className="text-sm font-bold hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen flex items-start justify-center px-6 pt-32 pb-12">
        <section className="w-full max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Get in Touch</h1>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16">Have a project in mind? Let's talk about it</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Name</h3>
                  <p className="text-gray-700 dark:text-gray-500">Dominic Cederblad</p>
                  <p className="text-gray-600 dark:text-gray-500 text-sm">Web developer</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Location</h3>
                  <p className="text-gray-700 dark:text-gray-500">Finland</p>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:dominiccederblad2003@gmail.com" className="text-[rgba(199,109,6,0.75)] hover:underline">
                    dominiccederblad2003@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+46123456789" className="text-[rgba(199,109,6,0.75)] hover:underline">
                    +358413158049
                  </a>
                </div>

                <div className="pt-6 border-t border-gray-300 dark:border-gray-600">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Available for freelance projects and collaborations. Response time: 12-48 hours.
                  </p>
                </div>

                <div className="pt-4">
                  <h3 className="font-bold text-lg mb-3">Follow</h3>
                  <div className="flex gap-4">
                    <a href="https://github.com/cederblad03-droid" className="text-[rgba(199,109,6,0.75)] hover:underline font-semibold">GitHub</a>
                    <a href="https://www.linkedin.com/in/dominic-cederblad-3a3606212/" className="text-[rgba(199,109,6,0.75)] hover:underline font-semibold">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              
              <form action="mailto:dominiccederblad2003@gmail.com" method="post" encType="text/plain" className="flex flex-col gap-6">
                <div>
                  <label className="block font-semibold mb-3 text-lg">Message *</label>
                  <textarea 
                    name="Message" 
                    placeholder="Tell me about your project..." 
                    required
                    className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white p-4 rounded text-base h-56 focus:outline-none focus:ring-2 focus:ring-[rgba(199,109,6,0.75)] resize-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-3 text-lg">Email *</label>
                  <input 
                    type="email"
                    name="Email" 
                    placeholder="your@email.com" 
                    required
                    className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[rgba(199,109,6,0.75)]"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-3 text-lg">Phone (optional)</label>
                  <input 
                    type="tel"
                    name="Phone" 
                    placeholder="Your phone number" 
                    className="w-full border-2 border-gray-300 dark:border-gray-600 bg-white p-4 rounded text-base focus:outline-none focus:ring-2 focus:ring-[rgba(199,109,6,0.75)]"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full px-6 py-4 bg-[rgba(199,109,6,0.75)] text-black font-bold text-lg rounded hover:opacity-90 transition mt-4"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
