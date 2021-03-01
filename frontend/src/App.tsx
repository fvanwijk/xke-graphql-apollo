import React from "react";
import "./App.css";
import { useGetBooksQuery } from "./types";

function App() {
  const { data, error, loading } = useGetBooksQuery();

  return (
    <div>
      <header>
        <div className="container">
          <h1>XKE - GraphQL Apollo</h1>
        </div>
      </header>
      <main>
        <div className="container">
          <h2>My books</h2>
          {loading && "Loading books…"}

          <ul>
            {data?.books.map((book) => {
              return (
                <li>
                  {book.author ? `${book.author?.firstName} ${book.author?.lastName}` : "Author unknown"} - {book.title}
                  <br />
                  Ratings: {book.ratings.map((r) => `[${r.user?.name} ${r.rating}]`).join(" ")}
                </li>
              );
            })}
          </ul>

          {error && "Error loading books"}
        </div>
      </main>
    </div>
  );
}

export default App;
