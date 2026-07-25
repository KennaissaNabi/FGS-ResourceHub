import { useDeferredValue, useMemo, useState } from "react";
import {
  audienceLabels,
  categoryLabels,
  resources,
  type Audience,
  type Category,
} from "./data/resources";
import "./App.css";

const HERO_IMAGE =
  "https://images.squarespace-cdn.com/content/v1/651ba15b3c337421fa9e2df8/55f4c218-7766-44f0-bcf1-22b54fca5ce5/A+Group+-+Big.jpg";

const LOGO =
  "https://images.squarespace-cdn.com/content/v1/651ba15b3c337421fa9e2df8/29fcc6a8-0b66-443e-988d-8b34b13c9b5c/FGS+Logo+2+Big.png?format=300w";

const AUDIENCES: Array<"all" | Exclude<Audience, "all">> = [
  "all",
  "high-school",
  "college-first-year",
];

const CATEGORIES: Array<"all" | Category> = [
  "all",
  "scholarship",
  "community",
  "internship",
  "program",
  "learning",
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function App() {
  const [audience, setAudience] = useState<"all" | Exclude<Audience, "all">>(
    "all",
  );
  const [category, setCategory] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return resources.filter((r) => {
      const audienceOk =
        audience === "all" || r.audiences.includes(audience);
      const categoryOk = category === "all" || r.category === category;
      if (!audienceOk || !categoryOk) return false;
      if (!q) return true;
      const haystack = [
        r.name,
        r.description,
        r.eligibility ?? "",
        ...r.tags,
        categoryLabels[r.category],
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [audience, category, deferredQuery]);

  return (
    <div className="page">
      <header className="site-header">
        <a
          className="brand"
          href="https://www.firstgenscholars.org/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LOGO} alt="First Gen Scholars" />
          <div className="brand-text">
            <strong>First Gen Scholars</strong>
            <span>Resource Hub</span>
          </div>
        </a>
        <a
          className="header-cta"
          href="https://www.firstgenscholars.org/donate"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
      </header>

      <section className="hero" aria-label="Introduction">
        <div className="hero-media">
          <img
            src={HERO_IMAGE}
            alt="First Gen Scholars students and mentors together"
          />
        </div>
        <div className="hero-scrim" />
        <div className="hero-content">
          <p className="hero-kicker">First Gen Scholars</p>
          <h1>
            Your map to college — <em>and beyond</em>
          </h1>
          <p className="hero-lead">
            Scholarships for juniors and seniors, plus tech communities,
            early internships, and learning paths for your first year on campus.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#resources">
              Browse resources
            </a>
            <a className="btn btn-ghost" href="#how">
              How to use this hub
            </a>
          </div>
        </div>
      </section>

      <section className="section how" id="how">
        <div className="section-intro">
          <h2>One hub. Two stages.</h2>
          <p>
            Filter by where you are — finishing high school or starting college —
            then dig into scholarships, communities, and technical opportunities.
          </p>
        </div>
        <ol className="how-steps">
          <li>
            <strong>High school juniors & seniors</strong>
            <p>
              Prioritize scholarships and college-access programs. Deadlines move
              fast — start your list early junior year.
            </p>
          </li>
          <li>
            <strong>First year in college</strong>
            <p>
              Join communities like ColorStack, take free CodePath courses, and
              target freshman/sophomore internships (STEP, Explore, Meta U).
            </p>
          </li>
          <li>
            <strong>Stay debt-free minded</strong>
            <p>
              Stack scholarships, institutional aid, and paid programs. First Gen
              Scholars is built to help you graduate without loans.
            </p>
          </li>
        </ol>
      </section>

      <section className="section" id="resources">
        <div className="section-intro">
          <h2>Resources</h2>
          <p>
            Curated for first-generation scholars — with a strong lane for
            software engineering and STEM, inspired by hubs like ColorStack.
          </p>
        </div>

        <div className="filters">
          <div className="search-wrap">
            <SearchIcon />
            <label className="visually-hidden" htmlFor="resource-search">
              Search resources
            </label>
            <input
              id="resource-search"
              type="search"
              placeholder="Search scholarships, internships, communities…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="filter-row" role="group" aria-label="Audience">
            <span className="filter-label">Audience</span>
            {AUDIENCES.map((key) => (
              <button
                key={key}
                type="button"
                className="chip"
                aria-pressed={audience === key}
                onClick={() => setAudience(key)}
              >
                {key === "all" ? "All" : audienceLabels[key]}
              </button>
            ))}
          </div>

          <div className="filter-row" role="group" aria-label="Category">
            <span className="filter-label">Type</span>
            {CATEGORIES.map((key) => (
              <button
                key={key}
                type="button"
                className="chip"
                aria-pressed={category === key}
                onClick={() => setCategory(key)}
              >
                {key === "all" ? "All" : categoryLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <p className="results-meta">
          Showing <strong>{filtered.length}</strong> resource
          {filtered.length === 1 ? "" : "s"}
        </p>

        {filtered.length === 0 ? (
          <div className="empty">
            No matches — try clearing a filter or searching a different keyword.
          </div>
        ) : (
          <div className="resource-grid">
            {filtered.map((resource, index) => (
              <article
                key={resource.id}
                className="resource-card"
                style={{ animationDelay: `${Math.min(index, 12) * 40}ms` }}
              >
                <div className="resource-card-top">
                  <span className={`badge badge-${resource.category}`}>
                    {categoryLabels[resource.category]}
                  </span>
                  {resource.audiences.map((a) =>
                    a === "all" ? null : (
                      <span key={a} className="tag">
                        {audienceLabels[a]}
                      </span>
                    ),
                  )}
                </div>
                <h3>{resource.name}</h3>
                <p>{resource.description}</p>
                {resource.eligibility ? (
                  <p className="eligibility">{resource.eligibility}</p>
                ) : null}
                <div className="tag-row">
                  {resource.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="card-link"
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="site-footer">
        <p>
          Built for{" "}
          <a href="https://www.firstgenscholars.org/" target="_blank" rel="noreferrer">
            First Gen Scholars
          </a>
          , a 501(c)(3) nonprofit (EIN 84-2846880). Deadlines and eligibility
          change — always confirm on the official program site.
        </p>
        <p>
          <a href="https://www.firstgenscholars.org/" target="_blank" rel="noreferrer">
            firstgenscholars.org
          </a>
        </p>
      </footer>
    </div>
  );
}
