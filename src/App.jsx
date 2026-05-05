export default function App() {
  const segments = [
    ["Sports Talk", "Football debates, match reactions, and bold opinions."],
    ["Real Convos", "Honest talks about life, culture, relationships, and growth."],
    ["Life Chronicles", "Stories, lessons, and real-life experiences."],
    ["Fun Zone", "Games, reactions, challenges, and entertaining moments."],
    ["Next Level", "Motivation, leadership, discipline, and self-improvement."],
  ];

  const videos = ["B-GSgNMT2HU", "B-GSgNMT2HU", "B-GSgNMT2HU"];

  const episodes = [
    {
      title: "DDS Sports Talk: Football & Opinions",
      category: "Sports Talk",
      videoId: "B-GSgNMT2HU",
      desc: "Football debates, reactions, and bold takes from DDS.",
    },
    {
      title: "Real Convos: Life & Growth",
      category: "Real Convos",
      videoId: "B-GSgNMT2HU",
      desc: "Deep conversations about life, mindset, and culture.",
    },
    {
      title: "Next Level: Discipline & Vision",
      category: "Next Level",
      videoId: "B-GSgNMT2HU",
      desc: "Motivation and personal growth for the next level.",
    },
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
            <a href="#episodes" className="hover:text-yellow-400">Episodes</a>
            <a href="#guests" className="hover:text-yellow-400">Guests</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>

      <section id="home" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div className="animate-fadeIn">
            <p className="mb-4 text-sm tracking-widest text-yellow-400">
              MEDIA • CULTURE • SPORTS • GROWTH
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              DOUBLE <br />
              DEE <span className="text-yellow-400">STUDIOS</span>
            </h1>

            <p className="mt-6 max-w-md text-gray-400">
              Powerful conversations. Real stories. Next level mindset.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#segments"
                className="rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black shadow-lg shadow-yellow-500/30 transition hover:scale-105"
              >
                Explore DDS
              </a>

              <a
                href="https://www.youtube.com/@DoubleDeeStudios"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/20 px-6 py-3 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-yellow-400/30 blur-3xl"></div>

            <img
              src="/DDS ORG.jpeg"
              alt="DDS Logo"
              className="relative max-h-[420px] object-contain"
            />
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
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
            DDS SEGMENTS
          </p>
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
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
            LATEST CONTENT
          </p>
          <h3 className="mt-4 text-4xl font-black">DDS Video Gallery</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((id, i) => (
              <iframe
                key={i}
                src={`https://www.youtube.com/embed/${id}`}
                title={`DDS Video ${i + 1}`}
                className="h-60 w-full rounded-2xl shadow-lg"
                allowFullScreen
              ></iframe>
            ))}
          </div>

          <a
            href="https://www.youtube.com/@DoubleDeeStudios"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-2xl bg-yellow-400 px-7 py-4 font-bold text-black transition hover:scale-105"
          >
            Watch More on YouTube
          </a>
        </div>
      </section>

      <section id="episodes" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
            DDS EPISODES
          </p>
          <h3 className="mt-4 text-4xl font-black">Featured Episodes</h3>
          <p className="mx-auto mt-4 max-w-2xl text-white/60">
            Explore conversations across sports, culture, and growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {episodes.map((ep) => (
            <div
              key={ep.title}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <img
  src={`https://img.youtube.com/vi/${ep.videoId}/maxresdefault.jpg`}
  alt={ep.title}
  className="h-56 w-full object-cover"
/>

              <div className="p-6">
                <p className="text-sm font-bold text-yellow-400">{ep.category}</p>
                <h4 className="mt-3 text-2xl font-black">{ep.title}</h4>
                <p className="mt-4 leading-7 text-white/60">{ep.desc}</p>

                <a
                  href={`https://www.youtube.com/watch?v=${ep.videoId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-block rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black"
                >
                  Watch Episode
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="guests" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
            FEATURED GUESTS
          </p>
          <h3 className="mt-4 text-4xl font-black">Guest Interviews</h3>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {["Dr. Bryon Dickson", "Creators", "Entrepreneurs"].map((guest) => (
            <div
              key={guest}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 text-center"
            >
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400 text-2xl font-black text-black">
                DDS
              </div>
              <h4 className="text-2xl font-black text-yellow-400">{guest}</h4>
              <p className="mt-4 text-white/60">
                Powerful conversations with voices that inspire, teach, and challenge the audience.
              </p>
            </div>
          ))}
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
            <a href="https://www.youtube.com/@DoubleDeeStudios" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400">
              YouTube
            </a>
            <a href="https://www.instagram.com/doubledeestudios/" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400">
              Instagram
            </a>
            <a href="https://www.tiktok.com/@doubledeestudios" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-3 font-bold hover:border-yellow-400 hover:text-yellow-400">
              TikTok
            </a>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-black/40 p-6">
            <h4 className="text-2xl font-black text-yellow-400">Book DDS Studios</h4>
            <p className="mt-2 text-white/60">
              Send a request for interviews, collaborations, sponsorships, or guest appearances.
            </p>

            <form
              action="https://formsubmit.co/doubledeestudio1@gmail.com"
              method="POST"
              className="mt-6 grid gap-4"
            >
              <input type="text" name="name" placeholder="Your Name" required className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400" />
              <input type="email" name="email" placeholder="Your Email" required className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400" />
              <input type="tel" name="phone" placeholder="Phone Number" className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400" />

              <select name="request_type" required className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400">
                <option value="">Select Request Type</option>
                <option value="Interview">Interview</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Guest Appearance">Guest Appearance</option>
                <option value="Other">Other</option>
              </select>

              <textarea name="message" placeholder="Tell us about your request..." rows="5" required className="rounded-xl border border-white/10 bg-black px-4 py-3 text-white outline-none focus:border-yellow-400"></textarea>

              <input type="hidden" name="_subject" value="New DDS Studios Booking Request" />

              <button type="submit" className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black transition hover:scale-105">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © 2026 DDS Studios 🎙️
      </footer>
    </div>
  );
}