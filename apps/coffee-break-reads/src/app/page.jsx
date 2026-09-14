"use client";

import { useMemo, useState } from "react";
import { episodes } from "../data/episodes";

export default function HomePage() {
  const [activeSlug, setActiveSlug] = useState(episodes[0].slug);
  const [expanded, setExpanded] = useState(false);

  const activeEpisode = useMemo(
    () => episodes.find((episode) => episode.slug === activeSlug) ?? episodes[0],
    [activeSlug]
  );

  function selectEpisode(slug) {
    setActiveSlug(slug);
    setExpanded(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="site-shell">
      <section className="hero-section">
        <div className="brand-row">
          <div>
            <p className="eyebrow">☕ Coffee Break Reads</p>
            <p className="read-time">2–3 min read · {activeEpisode.date}</p>
          </div>
          <button
            className="archive-button"
            onClick={() => document.getElementById("archive")?.scrollIntoView({ behavior: "smooth" })}
          >
            Archive
          </button>
        </div>

        <div className="hero-copy">
          <p className="tiny-label">TODAY'S LITTLE QUESTION</p>
          <h1>{activeEpisode.title}</h1>
          <p className="teaser">{activeEpisode.teaser}</p>
          <p className="ellipsis">...</p>

          {!expanded ? (
            <button className="read-button" onClick={() => setExpanded(true)}>
              Continue reading ↓
            </button>
          ) : (
            <p className="scroll-cue">Keep going ↓</p>
          )}
        </div>

        <a
          className="soundtrack-card"
          href={activeEpisode.youtube}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <span className="soundtrack-label">🎧 Today's soundtrack</span>
            <strong>{activeEpisode.song}</strong>
            <span>{activeEpisode.artist}</span>
          </div>
          <span className="play-pill">Play ↗</span>
        </a>
      </section>

      {expanded && (
        <section className="article-section">
          <div className="article-copy">
            {activeEpisode.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="thought-card">
            <p className="tiny-label">☕ COFFEE THOUGHT</p>
            <blockquote>{activeEpisode.thought}</blockquote>
          </div>

          <div className="closing-copy">
            <p>That's all for today. ☕</p>
            <span>One story. One song. One tiny thought to carry into the day.</span>
          </div>
        </section>
      )}

      <section className="archive-section" id="archive">
        <div className="section-heading">
          <p className="tiny-label">THE COFFEE SHELF</p>
          <h2>Five small reads for whenever you have a minute.</h2>
        </div>

        <div className="episode-list">
          {episodes.map((episode, index) => (
            <button
              key={episode.slug}
              className={`episode-card ${episode.slug === activeEpisode.slug ? "active" : ""}`}
              onClick={() => selectEpisode(episode.slug)}
            >
              <span className="episode-number">0{index + 1}</span>
              <span className="episode-info">
                <strong>{episode.title}</strong>
                <small>{episode.date}</small>
              </span>
              <span>→</span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
