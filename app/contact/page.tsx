import Link from "next/link";
import GoHomeButton from "../components/GoHomeButton";

export default function ContactPage() {
  return (
    <>
      <header className="w-full fixed top-0 left-0 z-30 site-nav bg-white/10 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <nav className="flex items-center gap-4">
            <Link href="/" className="text-sm font-bold hover:underline">Home</Link>
            <Link href="/project" className="text-sm font-bold hover:underline">Projects</Link>
            <Link href="/contact" className="text-sm font-bold hover:underline">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen flex items-center justify-center p-6 pt-24">
        <section className="w-full max-w-2xl">
          <div className="card w-full p-6">
            <h1 className="text-2xl font-bold mb-2">Contact</h1>
            <p className="mb-4">Reach out via email or the simple form below.</p>

            <p className="mb-4">
              Email: <a href="mailto:you@example.com" className="text-blue-600">dominiccederblad2003@gmail.com</a>
            </p>

            <form action="mailto:you@example.com" method="post" encType="text/plain" className="flex flex-col gap-3">
              <input name="Name" placeholder="Your name" className="border p-2 rounded" />
              <input name="Email" placeholder="Your email" className="border p-2 rounded" />
              <textarea name="Message" placeholder="Message" className="border p-2 rounded h-32" />

              <div className="flex gap-3">
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
                <GoHomeButton />
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
