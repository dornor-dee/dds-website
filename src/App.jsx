export default function App() {
  const segments = [
    ["Sports Talk", "Football debates, match reactions, and bold opinions."],
    ["Real Convos", "Honest talks about life, culture, relationships, and growth."],
    ["Life Chronicles", "Stories, lessons, and real-life experiences."],
    ["Fun Zone", "Games, reactions, challenges, and entertaining moments."],
    ["Next Level", "Motivation, leadership, discipline, and self-improvement."],
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <img
              src="/DDS ORG.jpeg"
              alt="DDS Logo"
              className="h-10 w-auto object-contain brightness-110 contrast-125"
            />
            <p className="hidden text-xs tracking-[0.3em] text-white/60 sm:block">
              DOUBLE DEE STUDIOS
            </p>
          </div>

          <nav className="hidden gap-8 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#segments" className="hover:text-yellow-400">Segments</a>
            <a href="#content" className="hover:text-yellow-400">Videos</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden px-6 py-24 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.22),transparent_35%)]"></div>

        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 text-xs font-bold tracking-[0.25em] text-yellow-300">
            MEDIA • CULTURE • SPORTS • GROWTH
          </p>

          <h2 className="text-5xl font-black leading-tight md:text-7xl">
            Double Dee <span className="text-yellow-400">Studios</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            DDS Studios is a creative media brand built for powerful conversations,
            sports talk, real stories, and next-level motivation.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a href="#segments" className="rounded-2xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105">
              Explore DDS
            </a>
            <a
              href="https://www.youtube.com/@DoubleDeeStudios"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-7 py-4 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">ABOUT DDS</p>
            <h3 className="mt-4 text-4xl font-black">A platform for real voices.</h3>
            <p className="mt-5 leading-8 text-white/70">
              DDS Studios creates content that entertains, inspires, and connects people.
              From football opinions to deep life conversations, DDS brings energy,
              honesty, and purpose to every episode.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8">
            <p className="text-sm font-bold tracking-[0.25em] text-yellow-300">MISSION</p>
            <h3 className="mt-4 text-4xl font-black">Inform. Inspire. Entertain.</h3>
            <p className="mt-5 leading-8 text-white/75">
              The goal is to build a media home where culture, sports, lifestyle,
              and personal growth come together in a bold and authentic way.
            </p>
          </div>
        </div>
      </section>

      <section id="segments" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">DDS SEGMENTS</p>
          <h3 className="mt-4 text-4xl font-black">Shows & Content Pillars</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {segments.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <h4 className="text-2xl font-black text-yellow-400">{title}</h4>
              <p className="mt-4 leading-7 text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="content" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-yellow-400/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">LATEST CONTENT</p>
          <h3 className="mt-4 text-4xl font-black">Latest DDS Video</h3>

          <div className="mt-10 flex justify-center">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/B-GSgNMT2HU"
              title="DDS Video"
              frameBorder="0"
              allowFullScreen
              className="w-full max-w-4xl rounded-2xl shadow-lg"
            ></iframe>
          </div>

          <a
            href="https://www.youtube.com/@DoubleDeeStudios"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-2xl bg-yellow-400 px-7 py-4 font-bold text-black"
          >
            Watch More on YouTube
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-white/5 p-8 md:p-12">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">CONTACT</p>
          <h3 className="mt-4 text-4xl font-black">Work with DDS Studios</h3>
          <p className="mt-5 max-w-2xl leading-8 text-white/70">
            For interviews, collaborations, partnerships, guest appearances,
            or business inquiries, connect with DDS Studios.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="font-bold text-yellow-400">Phone</p>
              <a href="tel:4052302410" className="mt-2 block text-white/80 hover:text-yellow-400">
                405-230-2410
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="font-bold text-yellow-400">Email</p>
              <a href="mailto:doubledeestudio1@gmail.com" className="mt-2 block text-white/80 hover:text-yellow-400">
                doubledeestudio1@gmail.com
              </a>
              <a href="mailto:derrickdonor@gmail.com" className="mt-1 block text-white/80 hover:text-yellow-400">
                derrickdonor@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/@DoubleDeeStudios"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              YouTube
            </a>

            <a
              href="https://www.instagram.com/doubledeestudios/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@doubledeestudios?lang=en"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © 2026 DDS Studios.
      </footer>
    </div>
  );
}