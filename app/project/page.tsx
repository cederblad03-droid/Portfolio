import GoHomeButton from "../components/GoHomeButton";

export default function ProjectPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <section className="w-full max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          <div className="card w-full">
            <h1 className="text-white text-2xl font-bold mb-2">Projects</h1>
            <p className="text-white mb-4">Here are some projects — add your content.</p>

            <div className="flex gap-3">
              <GoHomeButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
