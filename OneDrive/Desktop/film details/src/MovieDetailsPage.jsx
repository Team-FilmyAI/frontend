import React from "react";
import { Link } from "react-router-dom";
import "./MovieDetailsPage.css"; 
import {
  ChevronLeft,
  Calendar,
  DollarSign,
  MapPin,
  Film as FilmIcon,
  UserRound,
} from "lucide-react";
console.log("🔧 Rohit's changes");


export default function MovieDetailsPage() {
  const movie = {
    title: "Drive in Manhattan",
    genres: ["Drama", "Romance"],
    director: "Sarah Chen",
    budget: "$5M–$10M",
    schedule: "January 15, 2025 – April 30, 2025",
    prodCompanies: [
      "Paramount Pictures",
      "Silver Screen Productions",
      "Manhattan Films",
    ],
    locations: ["New York City, NY", "Manhattan, NY", "Brooklyn, NY"],
    synopsis:
      "A heart‑warming story about second chances in the big city. When successful architect Sarah returns to New York after a decade abroad, she discovers that the city—and the people she left behind—have changed in unexpected ways. As she navigates reconnecting with old friends and confronting past mistakes, Sarah must decide whether some bridges are worth rebuilding, even when the foundation has shifted.",
  };

  const roles = [
    {
      title: "Supporting Male Lead",
      status: "open",
      description: "Charming and witty character who becomes Sarah’s love interest",
      requirements: ["Age 25–35", "Strong dramatic skills", "NYC local preferred"],
      pay: "$50,000 – $75,000",
    },
    {
      title: "Sarah’s Best Friend",
      status: "open",
      description: "Loyal friend who helps Sarah navigate her return to the city",
      requirements: ["Age 28–38", "Comedy experience", "Strong chemistry with lead"],
      pay: "$30,000 – $45,000",
    },
    {
      title: "Rival Architect",
      status: "filled",
      description: "Competitive architect who challenges Sarah professionally",
      requirements: ["Age 30–45", "Professional demeanor", "Business background preferred"],
      pay: "$25,000 – $35,000",
    },
    {
      title: "Coffee Shop Owner",
      status: "open",
      description: "Warm, welcoming character who provides wisdom and comfort",
      requirements: ["Age 45–60", "Parental figure energy", "NYC accent preferred"],
      pay: "$15,000 – $25,000",
    },
  ];

  const statusChip = (status) => {
    const base = "px-2 py-0.5 rounded-full text-xs font-semibold";
    return status === "open" ? (
      <span className={`${base} bg-emerald-500/20 text-emerald-400`}>open</span>
    ) : (
      <span className={`${base} bg-muted/20 text-muted`}>filled</span>
    );
  };
<div className="bg-red-500 text-white p-4 mb-4 rounded-lg">
</div>

  return (
    <div className="min-h-screen bg-bg text-[#f1f1f1] font-sans">
      <header className="sticky top-0 z-40 bg-bg/90 backdrop-blur border-b border-muted-bg">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-lg font-bold">
            <span className="grid place-items-center w-6 h-6 rounded bg-primary text-bg text-sm">F</span>
            FilmyAI
          </Link>

          <div className="flex-1 max-w-md hidden md:block ml-6 relative">
            <input
              type="search"
              placeholder="Search movies, roles, directors…"
              className="w-full bg-muted-bg placeholder-muted text-sm rounded-lg px-10 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <button className="relative p-2 hover:bg-muted-bg rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-muted"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.681-4.1.75.75 0 00-.556-1.281h-3.087a.313.313 0 01-.223-.092l-1.154-1.154a.312.312 0 01-.092-.223V7.135a.75.75 0 00-1.281-.556 23.848 23.848 0 00-4.1 5.681.75.75 0 00.16.83l1.974 1.974a.75.75 0 00.83.16z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19.5H5.25a2.25 2.25 0 01-2.25-2.25v-7.5a2.25 2.25 0 012.25-2.25H9m3-3h7.5A2.25 2.25 0 0121 6v7.5"
              />
            </svg>
          </button>
          <button className="p-2 hover:bg-muted-bg rounded-lg">
            <UserRound className="w-5 h-5 text-muted" />
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/" className="flex items-center gap-2 text-sm text-muted hover:text-primary mb-6">
          <ChevronLeft className="w-4 h-4" /> Back to Movies
        </Link>

        <section className="grid md:grid-cols-[260px_1fr] gap-10">
          <img
            src="https://via.placeholder.com/260x390.png?text=Poster"
            alt="Drive in Manhattan poster"
            className="w-full h-auto rounded-lg object-cover shadow-card"
          />

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{movie.title}</h1>
            <p className="text-primary text-sm font-medium uppercase tracking-wide">
              {movie.genres.join("/")}
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <FilmIcon className="w-4 h-4 text-primary mt-0.5" />
                <div><span className="text-muted">Director: </span>{movie.director}</div>
              </li>
              <li className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-primary mt-0.5" />
                <div><span className="text-muted">Budget: </span>{movie.budget}</div>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 text-primary mt-0.5" />
                <div>{movie.schedule}</div>
              </li>
              <li className="flex items-start gap-2">
                <FilmIcon className="w-4 h-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-muted">Production Companies</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.prodCompanies.map((c) => (
                      <span key={c} className="bg-muted-bg text-xs px-2 py-0.5 rounded-pill">{c}</span>
                    ))}
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div className="space-y-1">
                  <p className="text-muted">Filming Locations</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.locations.map((l) => (
                      <span key={l} className="bg-muted-bg text-xs px-2 py-0.5 rounded-pill">{l}</span>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-bold mb-4">Synopsis</h2>
          <p className="max-w-3xl leading-relaxed text-muted">
            {movie.synopsis}
          </p>
        </section>

        <section className="mt-16">
          <h2 className="text-xl font-bold mb-6">Available Roles</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {roles.map((r) => (
              <div
                key={r.title}
                className="bg-[#131313] border border-muted-bg rounded-2xl p-6 flex flex-col shadow-card"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-base">{r.title}</h3>
                  {statusChip(r.status)}
                </div>
                <p className="text-sm mb-4 text-muted leading-relaxed">{r.description}</p>
                <p className="text-sm font-medium mb-1 text-muted">Requirements:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {r.requirements.map((req) => (
                    <span key={req} className="bg-muted-bg text-xs px-2 py-0.5 rounded-pill">{req}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="font-semibold text-sm text-primary/90">{r.pay}</span>
                  {r.status === "open" && (
                    <button className="px-4 py-1.5 text-sm rounded-lg bg-primary hover:bg-[#ff9500] text-black font-semibold transition">
                      Apply Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
