import { Link, Routes, Route, useParams } from "react-router-dom";

const segments = [
  ["Sports Talk", "Football debates, match reactions, and bold opinions."],
  ["Real Convos", "Honest talks about life, culture, relationships, and growth."],
  ["Life Chronicles", "Stories, lessons, and real-life experiences."],
  ["Fun Zone", "Games, reactions, challenges, and entertaining moments."],
  ["Next Level", "Motivation, leadership, discipline, and self-improvement."],
];

const videos = ["J7C9lyQgK8s", "96NXVq0g0bw", "B-GSgNMT2HU"];

const episodes = [
  {
    slug: "we-talk-too-much",
    title: "We Talk Too Much, So We Hit Record",
    category: "DDS Intro",
    videoId: "J7C9lyQgK8s",
    desc: "The beginning of the DDS journey — real conversations, fun energy, and the start of the brand.",
    points: ["The beginning of DDS", "Why conversations matter", "Building a media identity"],
  },
  {
    slug: "football-is-broken",
    title: "Football is Broken?! VAR Debate, Arsenal Title Push & Man United",
    category: "Sports Talk",
    videoId: "96NXVq0g0bw",
    desc: "Football debates, VAR opinions, Arsenal title talk, Man United discussion, and bold sports takes.",
    points: ["VAR controversy", "Arsenal title hopes", "Manchester United situation"],
  },
  {
    slug: "dds-featured-conversation",
    title: "DDS Featured Conversation",
    category: "Real Convos",
    videoId: "B-GSgNMT2HU",
    desc: "A featured DDS conversation focused on real stories, culture, and meaningful discussion.",
    points: ["Real stories", "Culture and identity", "Lessons from conversation"],
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/DDS ORG.jpeg"
            alt="DDS Logo"
            className="h-10 w-auto object-contain brightness-110 contrast-125"
          />
          <p className="hidden text-xs tracking-[0.3em] text-white/60 sm:block">
            DOUBLE DEE STUDIOS
          </p>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <a href="/#about" className="hover:text-yellow-400">About</a>
          <a href="/#segments" className="hover:text-yellow-400">Segments</a>
          <a href="/#videos" className="hover:text-yellow-400">Videos</a>
          <a href="/#episodes" className="hover:text-yellow-400">Episodes</a>
          <a href="/#guests" className="hover:text-yellow-400">Guests</a>
          <a href="/#contact" className="hover:text-yellow-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function HomePage() {
  const stats = [
    ["Media Brand", "Identity"],
    ["3+", "Published Videos"],
    ["5", "Content Pillars"],
    ["24/7", "Digital Presence"],
  ];

  return (
    <>
      <section id="home" className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(250,204,21,0.16),transparent_35%)]"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold tracking-widest text-yellow-400">
              MEDIA • CULTURE • SPORTS • GROWTH
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              DOUBLE <br />
              DEE <span className="text-yellow-400">STUDIOS</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              A creative media platform built for powerful conversations, sports talk,
              real stories, culture, and next-level motivation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#episodes"
                className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-black shadow-lg shadow-yellow-500/30 transition hover:scale-105"
              >
                Watch Episodes
              </a>

              <a
                href="https://www.youtube.com/@DoubleDeeStudios"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-yellow-400 hover:text-yellow-400"
              >
                Subscribe on YouTube
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-yellow-400/25 blur-3xl"></div>
            <img
              src="/DDS ORG.jpeg"
              alt="DDS Logo"
              className="relative max-h-[430px] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map(([big, small]) => (
            <div
              key={big}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <p className="text-2xl font-black text-yellow-400">{big}</p>
              <p className="mt-1 text-sm text-white/55">{small}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
              ABOUT DDS
            </p>
            <h3 className="mt-4 text-4xl font-black">A platform for real voices.</h3>
            <p className="mt-5 leading-8 text-white/70">
              DDS Studios creates content that entertains, inspires, and connects people
              through sports, culture, lifestyle, and meaningful conversations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8">
            <p className="text-sm font-bold tracking-[0.25em] text-yellow-300">
              MISSION
            </p>
            <h3 className="mt-4 text-4xl font-black">Inform. Inspire. Entertain.</h3>
            <p className="mt-5 leading-8 text-white/75">
              DDS is built to become a media home where culture, sports, personality,
              and personal growth come together.
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

      <section id="videos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-yellow-400/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold tracking-[0.25em] text-yellow-400">
            LATEST CONTENT
          </p>
          <h3 className="mt-4 text-4xl font-black">DDS Video Gallery</h3>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((id, i) => (
              <iframe
                key={id}
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
            Explore conversations across sports, culture, real stories, and growth.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              to={`/episodes/${ep.slug}`}
              className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <div className="relative">
                <img
                  src={`https://img.youtube.com/vi/${ep.videoId}/maxresdefault.jpg`}
                  alt={ep.title}
                  className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="rounded-full bg-black/75 px-5 py-4 text-2xl transition group-hover:bg-yellow-400 group-hover:text-black">
                    ▶
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-bold text-yellow-400">{ep.category}</p>
                <h4 className="mt-3 text-2xl font-black">{ep.title}</h4>
                <p className="mt-4 leading-7 text-white/60">{ep.desc}</p>
              </div>
            </Link>
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

      <ContactSection />
    </>
  );
}

function ContactSection() {
  return (
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

          <form action="https://formsubmit.co/doubledeestudio1@gmail.com" method="POST" className="mt-6 grid gap-4">
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
  );
}

function EpisodePage() {
  const { slug } = useParams();
  const episode = episodes.find((ep) => ep.slug === slug);

  if (!episode) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-24">
        <h1 className="text-4xl font-black text-yellow-400">Episode Not Found</h1>
        <Link to="/" className="mt-6 inline-block text-white/70 hover:text-yellow-400">
          Back Home
        </Link>
      </main>
    );
  }

  const relatedEpisodes = episodes.filter((ep) => ep.slug !== episode.slug);

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <Link to="/" className="text-yellow-400 hover:text-yellow-300">
        ← Back to Home
      </Link>

      <p className="mt-10 text-sm font-bold tracking-[0.25em] text-yellow-400">
        {episode.category}
      </p>

      <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
        {episode.title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
        {episode.desc}
      </p>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
        <iframe
          src={`https://www.youtube.com/embed/${episode.videoId}`}
          title={episode.title}
          className="h-[300px] w-full md:h-[560px]"
          allowFullScreen
        ></iframe>
      </div>

      <section className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl font-black text-yellow-400">About This Episode</h2>
          <p className="mt-5 leading-8 text-white/70">{episode.desc}</p>

          <a
            href={`https://www.youtube.com/watch?v=${episode.videoId}`}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black"
          >
            Watch on YouTube
          </a>
        </div>

        <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-8">
          <h2 className="text-3xl font-black">Key Topics</h2>
          <ul className="mt-5 space-y-3 text-white/75">
            {episode.points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-black text-yellow-400">Related Episodes</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {relatedEpisodes.map((ep) => (
            <Link
              key={ep.slug}
              to={`/episodes/${ep.slug}`}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 hover:border-yellow-400/50"
            >
              <p className="text-sm font-bold text-yellow-400">{ep.category}</p>
              <h3 className="mt-3 text-2xl font-black">{ep.title}</h3>
              <p className="mt-3 text-white/60">{ep.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/episodes/:slug" element={<EpisodePage />} />
      </Routes>
      <section className="text-center py-20">
  <h2 className="text-4xl font-black">Join The DDS Movement</h2>
  <p className="mt-4 text-white/60">
    Subscribe, follow, and be part of the conversations.
  </p>

  <a
    href="https://www.youtube.com/@DoubleDeeStudios"
    target="_blank"
    className="mt-6 inline-block bg-yellow-400 px-8 py-4 rounded-xl font-bold text-black"
  >
    Subscribe Now
  </a>
</section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © 2026 DDS Studios 🎙️
      </footer>
    </div>
  );
}