import Link from "next/link";
import GoHomeButton from "../components/GoHomeButton";

export default function ProjectPage() {
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
        <section className="w-full max-w-4xl">
          <div className="flex flex-col items-center gap-6">
            <div className="card w-full">
              <h1 className="text-2xl font-bold mb-2">Projects</h1>
              <p className="mb-4">Here are some projects — add your content.</p>

              <div className="flex gap-3">
                
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
