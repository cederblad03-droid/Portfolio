import Image from "next/image";
import GoToProjectButton from "./components/GoToProjectButton";
import GoHomeButton from "./components/GoHomeButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-start justify-center py-12 px-6">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-12">
        <aside className="w-full md:w-1/4 flex flex-col items-center gap-8">
          <div className="w-56 h-56 rounded- overflow-hidden border-0 border-black/5 shadow-xl">
            <Image src="/Snapchat-2100454090.jpg" alt="Profile" width={224} height={224} className="object-cover w-full h-full" />
          </div>

          <div className="flex gap-3">
            <GoHomeButton />
            <GoToProjectButton />
          </div>
        </aside>

        <section className="w-full md:w-3/4">
          <div className="card p-8 min-h-[260px]">
            <h1 className="text-3xl text-white md:text-4xl font-bold mb-3">Dominic Cederblad - Program Developer</h1>
            <p className="text-base text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              I build clean, accessible web interfaces with Next.js and Tailwind. This portfolio area is expanded so you can add
              more text, screenshots, or project embeds. Replace this paragraph with your full bio or an introduction.
            </p>

            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Tailwind</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Chill Guy</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">League of Legends</span>
                <span className="px-3 py-1 bg-gray-100 rounded text-sm">Team Fight Tactics</span>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Featured</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white/60 rounded shadow">Project screenshot or description</div>
                <div className="p-3 bg-white/60 rounded shadow">Project screenshot or description</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
