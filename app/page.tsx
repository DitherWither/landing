"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  Coffee,
  Cpu,
  Folder,
  Gamepad2,
  Globe2,
  Heart,
  Mail,
  MessageCircle,
  MapPin,
  Music2,
  Network,
  Palette,
  Terminal,
  Wrench,
} from "lucide-react";

function GithubLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5.16 3.5A2.34 2.34 0 1 1 5.16 8.18a2.34 2.34 0 0 1 0-4.68ZM3.1 9.9h4.12V21H3.1V9.9Zm6.7 0h3.95v1.52h.06c.55-1.04 1.9-2.14 3.9-2.14 4.17 0 4.94 2.74 4.94 6.3V21h-4.12v-4.8c0-1.15-.02-2.63-1.6-2.63-1.61 0-1.86 1.25-1.86 2.55V21H9.8V9.9Z" />
    </svg>
  );
}

function DiscordLogo({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.54 5.12A16.7 16.7 0 0 0 15.43 4l-.5 1.02a15.4 15.4 0 0 0-5.86 0L8.57 4a16.7 16.7 0 0 0-4.11 1.12C1.85 8.6 1.15 12 1.5 15.36a16.8 16.8 0 0 0 5.05 2.58l1.22-1.67c-.67-.25-1.3-.56-1.9-.93l.46-.35c3.67 1.72 7.65 1.72 11.28 0l.47.35c-.6.37-1.24.68-1.91.93l1.22 1.67a16.8 16.8 0 0 0 5.05-2.58c.41-3.9-.7-7.27-2.9-10.24ZM8.7 13.4c-1.1 0-2-.98-2-2.18s.9-2.2 2-2.2 2 .98 2 2.2-.9 2.18-2 2.18Zm6.6 0c-1.1 0-2-.98-2-2.18s.9-2.2 2-2.2 2 .98 2 2.2-.9 2.18-2 2.18Z" />
    </svg>
  );
}

const sections = [
  { id: "about", label: "About", icon: Heart },
  { id: "interests", label: "Interests", icon: Gamepad2 },
  { id: "projects", label: "Projects", icon: Braces },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "work-experience", label: "Work Experience", icon: BriefcaseBusiness },
  { id: "contact", label: "Contact", icon: Mail },
];

const projects = [
  {
    title: "Directories",
    href: "https://hex.pm/packages/directories",
    icon: Folder,
  },
  { title: "Platform", href: "https://hex.pm/packages/platform", icon: Cpu },
  {
    title: "etchteateapee",
    href: "https://github.com/DitherWither/etchteateapee",
    icon: Network,
  },
  {
    title: "Yume",
    href: "https://github.com/DitherWither/yume",
    icon: Gamepad2,
  },
  {
    title: "Butterscotch OS",
    href: "https://github.com/ditherwither/butterscotch",
    icon: Terminal,
  },
];

const watching = [
  {
    japanese: "Re:ゼロから始める異世界生活 4th season",
    romaji: "Re:Zero kara Hajimeru Isekai Seikatsu 4th season",
    english: "Re:ZERO -Starting Life in Another World- Season 4",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx189046-yaHWtS5FII46.jpg",
  },
  {
    japanese: "ヤニねこ",
    romaji: "Yani Neko",
    english: "Chainsmoker Cat",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx207141-h5q5KJPd6vaX.jpg",
  },
  {
    japanese: "ジョジョの奇妙な冒険 Part 7 スティール・ボール・ラン",
    romaji: "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
    english: "JoJo's Bizarre Adventure: Steel Ball Run",
    image:
      "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx190327-riJNCFL7w9y4.jpg",
  },
];

const artists = [
  {
    name: "Ado",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages221/v4/cc/19/c9/cc19c998-8c2a-b278-d0ed-d85c5a04fedc/ami-identity-75a97779b1fcac49bfafa6c4b7a6a78f-2025-01-10T01-04-23.725Z_cropped.png/380x380cc.webp",
    spotify: "https://open.spotify.com/artist/6mEQK9m2krja6X1cfsAjfl",
    apple: "https://music.apple.com/us/artist/ado/1497765416",
  },
  {
    name: "Azari",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/65/1f/09/651f0956-a6a6-256a-c1e5-a06a507c8b0d/5054197290732_cover.png/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/0cevUP0ssLSLm7ict9X2E9",
    apple: "https://music.apple.com/us/artist/azari/1576463891",
  },
  {
    name: "Neru",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/49/3d/ba/493dbafc-ac48-fdde-b521-ac1454a4269b/5021732642868.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/0rhcL1Mw7J9YJRDpD6mhXr",
    apple: "https://music.apple.com/us/artist/neru/320815306",
  },
  {
    name: "Sheena Ringo",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b0/23/1d/b0231dd1-5ff2-80f0-1114-1f20eb559b1a/00602567711742.rgb.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/3EPOdC4D9h9W7V7r6e6r8P",
    apple: "https://music.apple.com/us/artist/sheena-ringo/731755",
  },
  {
    name: "Yorushika",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/66/89/90/6689908a-4489-a37b-13cc-cc578edd2329/26UMGIM33736.rgb.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/4UK2Lzi6fBfUi9rpDt6cik",
    apple: "https://music.apple.com/us/artist/yorushika/1363284621",
  },
  {
    name: "9lana",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/57/e3/45/57e3458e-e2b6-734e-259f-a6e000668f30/4547366836509.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/6ZmaNdAeG1XOHj6SKoeNNZ",
    apple: "https://music.apple.com/us/artist/9lana/1721402990",
  },
  {
    name: "Inabakumori",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/fc/3b/c2/fc3bc2ef-3099-2ff0-dee5-0a8ffff6e2e8/PA00076436_0_136908_jacket.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/25b7eSZD64Sm8ReHZ1WDc7",
    apple: "https://music.apple.com/us/artist/inabakumori/1373126991",
  },
  {
    name: "Yoasobi",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/7f/8c/90/7f8c90dd-e11f-30d5-271d-4b72eee970bd/195497666737.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/1FESLZ5R6u3x1K7k8m9n0P",
    apple: "https://music.apple.com/us/artist/yoasobi/1498243055",
  },
  {
    name: "DECO*27",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/af/0c/c1/af0cc1d0-56a8-1f38-2be8-898e0c7fe40a/4511820-61088.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/7kZTWx6cRLc0TSRPq1XBMP",
    apple: "https://music.apple.com/us/artist/deco-27/353899348",
  },
  {
    name: "Aimer",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/f2/73/7a/f2737a09-1580-cff2-e402-fa3fe730163c/4547366760002.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/0bAsR2unSRpn6BQPEnNlLQ",
    apple: "https://music.apple.com/us/artist/aimer/426335604",
  },
  {
    name: "Lena Raine",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/87/af/6a/87af6a5a-af86-974e-67d6-14d57550a0ee/840093227690.png/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/3pF8f5X2p2a8r5f7b9c1dE",
    apple: "https://music.apple.com/us/artist/lena-raine/1465939425",
  },
  {
    name: "C418",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/dc/26/fd/dc26fd7b-3f58-e34b-375c-4f7a0b70f741/859711538643.jpg/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/5eAVs6YgK8H2v3n4m5b6c7",
    apple: "https://music.apple.com/us/artist/c418/415353486",
  },
  {
    name: "Toby Fox",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/d3/21/9f/d3219f8b-c2ff-2498-0e87-eb57873b6eca/841787181533.png/600x600bb.jpg",
    spotify: "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
    apple: "https://music.apple.com/us/artist/toby-fox/1440836448",
  },
];

export default function Page() {
  const [time, setTime] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    update();
    const interval = window.setInterval(update, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      document.documentElement.style.setProperty(
        "--cursor-x",
        `${event.clientX}px`,
      );
      document.documentElement.style.setProperty(
        "--cursor-y",
        `${event.clientY}px`,
      );
    };
    window.addEventListener("pointermove", updateCursor, { passive: true });
    return () => window.removeEventListener("pointermove", updateCursor);
  }, []);

  return (
    <main className="portfolio-shell">
      <div className="grain" aria-hidden="true" />
      <header className="site-header" id="top">
        <p className="location">
          <MapPin size={14} aria-hidden="true" /> Pune, India · {time || "—"}{" "}
          IST
        </p>
        <nav aria-label="Primary navigation">
          {sections.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">
          Saumya<div>she/they</div>
        </h1>
        <div className="hero-detail">
          <p>
            Mechanical Engineering Sophmore @{" "}
            <a href="https://www.coeptech.ac.in/">COEP Tech</a>
          </p>
          <p>
            Part-time Game Dev @{" "}
            <a href="https://x.com/SeaCatsStudio">Seacats Studio</a>
          </p>
        </div>
      </section>

      <div className="content-grid">
        <aside className="side-nav" aria-label="Page navigation">
          <span className="nav-label">Index</span>
          <nav>
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="content-column">
          <section className="section-rule" id="about">
            <div className="section-kicker">About</div>
            <div className="section-copy">
              <ul className="about-list">
                <li>
                  Switching industries right now, from CS to a more
                  interdisiplinary background
                </li>
                <li>English native speaker</li>
                <li>Can speak Marathi fluently but suck at reading it</li>
                <li>Am capable of basic daily conversations in Hindi</li>
                <li>I&apos;m also learning Japanese on the side for fun</li>
              </ul>
            </div>
          </section>

          <h2>Interests</h2>
          <section className="section-rule" id="interests">
            <div className="interest-layout">
              <ul className="signal-list">
                <li>
                  <Music2 size={15} aria-hidden="true" /> Vocaloid, J-Pop Music
                </li>
                <li>
                  <Gamepad2 size={15} aria-hidden="true" /> Osu
                </li>
                <li>
                  <Palette size={15} aria-hidden="true" /> Anime
                </li>
                <li>
                  <Braces size={15} aria-hidden="true" /> Programming
                </li>
                <li>
                  <Globe2 size={15} aria-hidden="true" /> Randomly scrolling
                  wikipedia for hours on end
                </li>
                <li>
                  <Coffee size={15} aria-hidden="true" /> Drinking excessive
                  amounts of coffee
                </li>
              </ul>
            </div>
            <div className="watching">
              <span className="section-kicker">Currently Watching</span>
              <ul>
                {watching.map((show) => (
                  <li className="watching-card" key={show.english}>
                    <img
                      src={show.image}
                      alt={`${show.english} poster`}
                      loading="lazy"
                    />
                    <div>
                      <strong>{show.english}</strong>
                      <span>{show.romaji}</span>
                      <span lang="ja">{show.japanese}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="artists">
              <h3 className="section-kicker">Favorite Music Artists</h3>
              <ul>
                {artists.map((artist) => (
                  <li className="artist-card" key={artist.name}>
                    <img
                      src={artist.image}
                      alt={`${artist.name} profile artwork from Apple Music`}
                      loading="lazy"
                    />
                    <div className="artist-card-body">
                      <strong>{artist.name}</strong>
                      <div className="artist-links">
                        <a
                          href={artist.spotify}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${artist.name} on Spotify`}
                        >
                          Spotify <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                        <a
                          href={artist.apple}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${artist.name} on Apple Music`}
                        >
                          Apple Music{" "}
                          <ArrowUpRight size={13} aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section-rule" id="projects">
            <div className="section-kicker">Projects</div>
            <div className="project-list projects-grid">
              {projects.map(({ title, href, icon: Icon }) => (
                <article className="project-row" key={title}>
                  <div className="project-main">
                    <h3>
                      <Icon size={18} aria-hidden="true" />
                      <a href={href} target="_blank" rel="noreferrer">
                        {title}
                      </a>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </h3>
                    {title === "Directories" && (
                      <ul>
                        <li>
                          <strong>239.7k</strong> downloads, depended upon by{" "}
                          <a href="https://gleam-wisp.github.io/wisp/">wisp</a>,
                          a web framework for{" "}
                          <a href="https://gleam.run/">gleam</a>
                        </li>
                        <li>
                          A library to fetch standard directory locations for
                          tempfiles, config files, cache, etc.
                        </li>
                      </ul>
                    )}
                    {title === "Platform" && (
                      <ul>
                        <li>
                          <strong>236.7k</strong> downloads
                        </li>
                        <li>
                          <strong>Zero-dependency</strong> platform detection
                          library for gleam
                        </li>
                      </ul>
                    )}
                    {title === "etchteateapee" && (
                      <ul>
                        <li>High-level HTTP Framework</li>
                        <li>Written in and for the C programming language</li>
                        <li>Only depends on standard library and pthreads</li>
                      </ul>
                    )}
                    {title === "Yume" && (
                      <ul>
                        <li>
                          <a href="https://webgpu.org/">WebGPU</a> based 3D
                          Renderer/Engine
                        </li>
                        <li>
                          Written in <a href="https://rust-lang.org/">Rust</a>
                        </li>
                      </ul>
                    )}
                    {title === "Butterscotch OS" && (
                      <ul>
                        <li>WIP Operating System written in Rust</li>
                        <li>
                          Has core kernel subsystems like paging, a memory
                          allocator, keyboard input drivers, and a
                          framebuffer-based terminal
                        </li>
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-rule" id="tools">
            <div className="section-kicker">Tools</div>
            <div className="tool-groups">
              <section className="tool-group" aria-labelledby="languages-title">
                <h3 id="languages-title">Programming Languages</h3>
                <ul className="tool-cards">
                  <li>
                    <a
                      href="https://www.typescriptlang.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>TypeScript</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>JavaScript</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>CSS</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>HTML</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://isocpp.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>C/C++</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.rust-lang.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Rust</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.gnu.org/software/bash/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Bash</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </section>
              <section
                className="tool-group"
                aria-labelledby="frameworks-title"
              >
                <h3 id="frameworks-title">Web Frameworks</h3>
                <ul className="tool-cards">
                  <li>
                    <a
                      href="https://nextjs.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Next.js</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://react.dev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>React</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Tailwind CSS</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://hono.dev/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.iconify.design/simple-icons:hono.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Hono</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://expressjs.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Express</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </section>
              <section className="tool-group" aria-labelledby="databases-title">
                <h3 id="databases-title">Databases</h3>
                <ul className="tool-cards">
                  <li>
                    <a
                      href="https://www.postgresql.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>PostgreSQL</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mysql.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>MySQL</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </section>
              <section className="tool-group" aria-labelledby="devops-title">
                <h3 id="devops-title">DevOps</h3>
                <ul className="tool-cards">
                  <li>
                    <a
                      href="https://www.docker.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Docker</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nginx.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Nginx</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://letsencrypt.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.iconify.design/simple-icons:letsencrypt.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Let&apos;s Encrypt</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://help.ubuntu.com/community/UFW"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.iconify.design/mdi:shield-check.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>UFW</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/features/actions"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.iconify.design/simple-icons:githubactions.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>GitHub Actions</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pages.cloudflare.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="https://api.iconify.design/simple-icons:cloudflare.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>Cloudflare Pages</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                  <li>
                    <a href="https://sst.dev/" target="_blank" rel="noreferrer">
                      <img
                        src="https://api.iconify.design/simple-icons:amazonaws.svg?color=%23000000"
                        alt=""
                        aria-hidden="true"
                      />
                      <span>AWS via SST</span>
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </section>

          <section className="section-rule" id="work-experience">
            <div className="section-kicker">Work Experience</div>
            <article className="experience-item">
              <header className="experience-heading">
                <h3>Full-Stack Web Developer</h3>
                <p className="experience-meta">
                  <strong>@ Leapflow</strong>
                  <span>Remote</span>
                  <span>Part Time</span>
                </p>
              </header>
              <ul>
                <li>
                  Worked from July 2024 to October 2024, then again from January
                  2025 to August 2025
                </li>
                <li>
                  Led a major rewrite from Python/FastAPI+React to{" "}
                  <a href="https://www.typescriptlang.org/">Typescript</a> and{" "}
                  <a href="https://nextjs.org/">Next.js</a>
                </li>
                <li>
                  Improved the authentication system by adding{" "}
                  <a href="https://oauth.net/2/">OAuth2</a> and stricter
                  validation
                </li>
                <li>
                  Wrote a system that lets employees of a company use emails to
                  communicate with agentic AI
                </li>
                <li>
                  Led a <strong>technical-debt reduction initiative</strong> by
                  reducing coupling between backend modules and enforcing
                  consistent typing and linting to stabilize long-term
                  maintainability.
                </li>
                <li>
                  Administered company-wide{" "}
                  <a href="https://workspace.google.com/">Google Workspace</a>,
                  managing user access, security settings, and operational
                  configuration.
                </li>
                <li>
                  Improved backend performance through improved caching and
                  query optimization.
                </li>
              </ul>
            </article>
            <article className="experience-item">
              <header className="experience-heading">
                <h3>Co-Founder</h3>
                <p className="experience-meta">
                  <strong>@ Skann</strong>
                </p>
              </header>
              <ul>
                <li>
                  September 2024 to January 2025, a lot of the work was around
                  the same time as leapflow
                </li>
                <li>
                  <strong>Lead development</strong> of a digital food ordering
                  system for restaurants
                </li>
                <li>
                  Co-ordinated with designers to improve the user experience
                </li>
                <li>
                  Integrated <a href="https://razorpay.com/">RazorPay</a> to
                  handle payments
                </li>
                <li>
                  Deployed a full-stack Next.js application on{" "}
                  <a href="https://aws.amazon.com/lambda/">AWS Lambda</a> with
                  CI/CD automation.
                </li>
              </ul>
            </article>
          </section>

          <section className="contact-section" id="contact">
            <h2>Contact Me</h2>
            <ul className="contact-links">
              <li className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <strong>Email</strong>
                  <a href="mailto:hi@dither.dev">hi@dither.dev</a>
                </div>
              </li>
              <li className="contact-card">
                <div className="contact-card-icon">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div className="contact-card-content">
                  <strong>Alternate Email</strong>
                  <a href="mailto:saumyasachinpatil@gmail.com">
                    saumyasachinpatil@gmail.com
                  </a>
                </div>
              </li>
              <li className="contact-card">
                <div className="contact-card-icon">
                  <LinkedinLogo size={18} />
                </div>
                <div className="contact-card-content">
                  <strong>LinkedIn</strong>
                  <a href="https://www.linkedin.com/in/ditherwither/">
                    @ditherwither
                  </a>
                </div>
              </li>
              <li className="contact-card">
                <div className="contact-card-icon">
                  <GithubLogo size={18} />
                </div>
                <div className="contact-card-content">
                  <strong>GitHub</strong>
                  <a href="https://github.com/ditherwither">@ditherwither</a>
                </div>
              </li>
              <li className="contact-card">
                <div className="contact-card-icon">
                  <DiscordLogo size={18} />
                </div>
                <div className="contact-card-content">
                  <strong>Discord</strong>
                  <a href="https://discordapp.com/users/1163511304372355112">
                    @invisbaka
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <footer>
        <span>© 2026 Saumya Patil</span>
      </footer>
      <div
        className="scroll-progress"
        role="progressbar"
        aria-label="Page reading progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress)}
      >
        <span style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      </div>
    </main>
  );
}
