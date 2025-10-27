import React, { useState } from "react";
import './App.css';

const SEARCH_URL = "https://openlibrary.org/search.json?title=";

function BookCard({ book }) {
  // cover_i is the Open Library cover id
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : 'https://via.placeholder.com/128x192?text=No+Cover';

  return (
    <div className="book-card">
      <img className="cover" src={coverUrl} alt={`${book.title} cover`} />
      <div className="meta">
        <h3 className="title">{book.title}</h3>
        <p className="author">{(book.author_name || []).slice(0,2).join(', ') || 'Unknown author'}</p>
        <p className="year">{book.first_publish_year ? `First published: ${book.first_publish_year}` : ''}</p>
      </div>
    </div>
  );
}

export default function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function doSearch(q) {
    if (!q || q.trim().length === 0) {
      setResults(null);
      setError("Please enter a book title to search.");
      return;
    }
    setError(null);
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch(SEARCH_URL + encodeURIComponent(q.trim()));
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      // show first 20 results
      setResults(json.docs.slice(0, 20));
      if (!json.docs || json.docs.length === 0) {
        setError("No results found.");
      }
    } catch (err) {
      setError("Network error: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    doSearch(query);
  }

  return (
    <div className="container">
      <header>
        <h1>Book Finder</h1>
        <p className="subtitle">Search books by title (Open Library)</p>
      </header>

      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="Enter book title (e.g., Pride and Prejudice)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" disabled={loading}>Search</button>
      </form>

      <div className="status">
        {loading && <p>Loading…</p>}
        {error && !loading && <p className="error">{error}</p>}
      </div>

      <main>
        {results && results.length > 0 && (
          <div className="grid">
            {results.map((book) => (
              <BookCard key={book.key || book.cover_edition_key || Math.random()} book={book} />
            ))}
          </div>
        )}
      </main>

      <footer>
        <small>Data from Open Library • <a href="https://openlibrary.org" target="_blank" rel="noreferrer">openlibrary.org</a></small>
      </footer>
    </div>
  );
}
