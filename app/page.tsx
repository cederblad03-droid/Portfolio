import Image from "next/image";
import Link from "next/link";
import GoToProjectButton from "./components/GoToProjectButton";
import GoHomeButton from "./components/GoHomeButton";

export default function Home() {
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

      {/* Hero Section */}
      <section className="w-full h-96 bg-cover bg-center relative mt-16 mb-12" 
        style={{backgroundImage: "url('/profile-photo.jpg')"}}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Welcome to My Portfolio</h2>
            <p className="text-lg text-gray-100">Building clean, accessible web interfaces with Typescript</p>
          </div>
        </div>
      </section>

      <main className="flex flex-col items-center justify-center px-6 pb-12">
        {/* About Section */}
        <section className="w-full max-w-6xl mt-8 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me & My Work</h2>
            <p className="text-lg text-gray-600 dark:text-gray-500 max-w-3xl mx-auto">
              I'm Dominic Cederblad, a web developer specialized in creating modern, responsive web interfaces. I work with the latest technologies to build fast, scalable, and user-friendly applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Front-end Development</h3>
              <p className="text-gray-700 dark:text-white">
                Building beautiful, responsive interfaces using React, Next.js and TypeScript. Clean code, performance-focused, and accessible to all users.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Web Design & UX</h3>
              <p className="text-gray-700 dark:text-white">
                Creating intuitive designs with Tailwind CSS. Every project is thoughtfully designed to provide the best user experience.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Full Stack Solutions</h3>
              <p className="text-gray-700 dark:text-white">
                From concept to deployment. I handle everything needed to bring your web project to life with modern development practices.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full max-w-6xl mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How I Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-[rgba(255, 255, 255, 0.75)] mb-3">01</div>
              <h3 className="font-bold mb-2">Discovery</h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Understanding your project goals, target audience, and vision for the final product.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-[rgba(255, 255, 255, 0.75)] mb-3">02</div>
              <h3 className="font-bold mb-2">Design & Plan</h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Creating wireframes and planning the architecture for optimal user experience and performance.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-[rgba(255, 255, 255, 0.75)] mb-3">03</div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Building clean, maintainable code with modern frameworks and best practices.
              </p>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-bold text-[rgba(255, 255, 255, 0.75)] mb-3">04</div>
              <h3 className="font-bold mb-2">Launch & Support</h3>
              <p className="text-sm text-gray-600 dark:text-white">
                Deploying your project and providing ongoing support and maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full max-w-6xl mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Modern Technologies</h3>
                <p className="text-gray-700 dark:text-black">I use current best practices and frameworks to ensure your project is future-proof.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Performance Focused</h3>
                <p className="text-gray-700 dark:text-black">Fast-loading, optimized sites that keep users engaged and improve search rankings.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-700 dark:text-black">Your project will look perfect on all devices - mobile, tablet, and desktop.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Quick Turnaround</h3>
                <p className="text-gray-700 dark:text-black">I work efficiently without sacrificing quality, delivering on time and within budget.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Clean Code</h3>
                <p className="text-gray-700 dark:text-black">Maintainable, well-documented code that's easy for other developers to work with.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl font-bold text-[rgba(199,109,6,0.75)] flex-shrink-0">✓</div>
              <div>
                <h3 className="font-bold mb-2">Great Communication</h3>
                <p className="text-gray-700 dark:text-black">Regular updates and open dialogue throughout the entire development process.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="w-full max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          </div>

          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4 text-lg">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">React</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Next.js</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Tailwind CSS</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-lg">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Git</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">VS Code</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">GitHub</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Vercel</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-4 text-lg">Other Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Responsive Design</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">SEO</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded text-sm text-white">Performance</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="inline-block px-8 py-3 bg-[rgba(199,109,6,0.75)] text-black font-bold rounded hover:opacity-90 transition">
              Get In Touch
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
