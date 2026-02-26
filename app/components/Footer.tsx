export default function Footer() {
  return (
    <footer className="w-full bg-[rgba(199,109,6,0.75)] backdrop-blur-sm border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-black font-bold">
            © {new Date().getFullYear()} Dominic Cederblad. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/cederblad03-droid" className="text-sm text-black font-bold hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/dominic-cederblad-3a3606212/" className="text-sm text-black font-bold hover:underline">LinkedIn</a>
            <a href="http://localhost:3000/contact" className="text-sm text-black font-bold hover:underline">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
