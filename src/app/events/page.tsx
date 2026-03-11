import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Venues | Blue Orange Digital × Databricks",
  description:
    "Co-sponsor executive events with Blue Orange — golf outings, private dining, and NYC networking.",
};

const venues = [
  {
    name: "Westchester Hills Golf Club",
    type: "Executive Golf Outings",
    capacity: "Up to 16 guests",
    description:
      "Premium golf experience for executive relationship building. Perfect for intimate deal discussions in a relaxed, prestigious setting. Full-day events include breakfast, 18 holes, and a post-round reception.",
    agenda: [
      { time: "8:00 AM", item: "Breakfast & Welcome" },
      { time: "9:00 AM", item: "Shotgun Start — 18 Holes" },
      { time: "2:00 PM", item: "Post-Round Reception & Discussion" },
      { time: "3:30 PM", item: "Wrap-Up & Next Steps" },
    ],
  },
  {
    name: "Fly Fish Club",
    type: "Private Dining",
    capacity: "8–12 guests",
    description:
      "Exclusive private dining for executive roundtables. Intimate three-course dinner with fireside chat format. Ideal for deep-dive conversations with C-level executives on data strategy and AI adoption.",
    agenda: [
      { time: "6:30 PM", item: "Cocktails & Networking" },
      { time: "7:00 PM", item: "Seated Dinner — First Course" },
      { time: "7:45 PM", item: "Fireside Chat: AI in Private Equity" },
      { time: "9:00 PM", item: "Dessert & Open Discussion" },
    ],
  },
  {
    name: "Maxwell Social",
    type: "NYC Networking",
    capacity: "20–50 guests",
    description:
      "Members-only social club in NYC for casual networking and hosted events. Ideal for larger partner gatherings, product launch celebrations, and industry meetups with a curated guest list.",
    agenda: [
      { time: "5:30 PM", item: "Doors Open — Networking" },
      { time: "6:15 PM", item: "Welcome & Keynote (15 min)" },
      { time: "6:45 PM", item: "Panel Discussion: The Lakehouse Era" },
      { time: "7:30 PM", item: "Open Bar & Networking" },
    ],
  },
];

const upcomingEvents = [
  {
    date: "Apr 15, 2026",
    title: "AI in Private Equity — Executive Dinner",
    venue: "Fly Fish Club",
    spots: "4 spots remaining",
  },
  {
    date: "May 8, 2026",
    title: "Spring Golf Classic — Databricks Partners",
    venue: "Westchester Hills Golf Club",
    spots: "8 spots remaining",
  },
  {
    date: "Jun 12, 2026",
    title: "Data & AI Summit NYC After-Party",
    venue: "Maxwell Social",
    spots: "Open registration",
  },
];

export default function Events() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-dbricks/5 blur-3xl" />
        </div>
        <div className="relative container-max section-padding pt-24 sm:pt-32 lg:pt-40 pb-16">
          <p className="section-label mb-4">Relationship Building</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-[1.1] mb-6">
            Events &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-dbricks">
              Venues
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed">
            We invest in real relationships, not just email pitches. Co-sponsor an executive event with Blue Orange.
          </p>
        </div>
      </section>

      {/* ── VENUE CARDS ──────────────────────────────────────────── */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="space-y-12">
            {venues.map((venue, i) => (
              <div
                key={venue.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-start p-8 rounded-md border-t-[3px] ${
                  i === 0 ? "border-t-dbricks" : i === 1 ? "border-t-amber" : "border-t-orange"
                } border border-dark/5 hover:shadow-lg transition-shadow duration-300 ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image placeholder */}
                <div className={`relative aspect-[4/3] rounded-md overflow-hidden bg-gradient-to-br from-dark/80 to-dark ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 200">
                    <circle cx="50" cy="50" r="60" fill="#FF6B35" />
                    <circle cx="250" cy="150" r="80" fill="#FF3621" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-xs uppercase tracking-wider">{venue.type} — Photo Placeholder</span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-medium">
                      {venue.capacity}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={i % 2 !== 0 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 font-mono text-[10px] tracking-[0.22em] uppercase font-medium text-orange bg-orange/10 rounded-full">{venue.type}</span>
                    <span className="text-xs text-muted">{venue.capacity}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-dark mb-3">{venue.name}</h3>
                  <p className="text-muted leading-relaxed mb-6">{venue.description}</p>

                  {/* Sample Agenda */}
                  <div className="mb-6">
                    <h4 className="font-mono text-[10px] tracking-[0.22em] uppercase font-bold text-dbricks mb-3">Sample Agenda</h4>
                    <div className="space-y-2">
                      {venue.agenda.map((a) => (
                        <div key={a.time} className="flex gap-4 items-center">
                          <span className="font-mono text-xs text-dbricks w-16 shrink-0">{a.time}</span>
                          <div className="w-2 h-2 rounded-full bg-dbricks/30 shrink-0" />
                          <span className="text-sm text-muted">{a.item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a href="#cosponsor" className="btn-primary text-sm">
                    Co-Sponsor This Event
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ──────────────────────────────────────── */}
      <section className="bg-stone-100 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="section-label justify-center mb-3">Calendar</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-dark mb-4">Upcoming Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((evt) => (
              <div key={evt.title} className="p-6 rounded-md border-t-[3px] border-t-orange bg-white border border-dark/5 hover:shadow-lg transition-shadow duration-300">
                <div className="font-mono text-sm text-dbricks mb-3">{evt.date}</div>
                <h3 className="font-serif text-lg font-bold text-dark mb-2">{evt.title}</h3>
                <p className="text-sm text-muted mb-4">
                  <svg className="w-4 h-4 inline mr-1.5 -mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {evt.venue}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">{evt.spots}</span>
                  <Link href="/contact" className="text-sm font-semibold text-orange hover:text-orange-600 transition-colors">
                    RSVP &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CO-SPONSOR FORM ──────────────────────────────────────── */}
      <section id="cosponsor" className="relative bg-dark dot-grid section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <p className="section-label justify-center mb-3">Get Involved</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Co-Sponsor an Event</h2>
            <p className="text-white/50 mb-10">
              Interested in co-hosting an executive event? Fill out the form below and our team will reach out within 24 hours.
            </p>

            <form className="space-y-4 text-left" action="#">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-orange/50 focus:outline-none transition-colors"
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-orange/50 focus:outline-none transition-colors"
                    placeholder="you@databricks.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 mb-1.5">Preferred Venue</label>
                <select className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white focus:border-orange/50 focus:outline-none transition-colors">
                  <option value="">Select a venue</option>
                  <option value="golf">Westchester Hills Golf Club</option>
                  <option value="flyfish">Fly Fish Club</option>
                  <option value="maxwell">Maxwell Social</option>
                  <option value="custom">Custom Event</option>
                </select>
              </div>
              <div>
                <label className="block font-mono text-[10px] tracking-[0.22em] uppercase text-white/60 mb-1.5">Details / Notes</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-orange/50 focus:outline-none transition-colors"
                  placeholder="Tell us about the event you have in mind..."
                />
              </div>
              <button type="submit" className="btn-primary w-full text-base py-4">
                Submit Co-Sponsor Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
