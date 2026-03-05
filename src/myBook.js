import { useState } from "react";

const tempBooks = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: "1949",
    cover: "/imges/img-1.jpg",
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    cover: "/imges/img-2.jpg",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: "1925",
    cover: "/imges/img-3.jpg",
  },
];
const tempRead = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    year: "1949",
    cover: "/imges/img-1.jpg",
    rating: 5,
    avgRating: 4.7,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: "1960",
    cover: "/imges/img-2.jpg",
    rating: 4,
    avgRating: 4.8,
  },
];
export function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState(tempBooks);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header query={query} onSetQuery={setQuery} />

      <MainBox>
        <BooksList query={query} books={books} />
      </MainBox>
      <MainBox>
        <ReadBooks />
      </MainBox>
    </div>
  );
}

function Header({ query, onSetQuery }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold flex items-center gap-2">
        <span>📚</span> MyBooks
      </h1>
      <input
        type="text"
        placeholder="Search books..."
        className="border rounded px-3 py-1"
        value={query}
        onChange={(e) => onSetQuery(e.target.value)}
      />
    </header>
  );
}

function MainBox({ children }) {
  return (
    <section className="bg-white p-4 rounded shadow mb-10">{children}</section>
  );
}

function BooksList({ query, books }) {
  const filteredBooks = books.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <>
      <h2 className="font-semibold mb-2">Books ({filteredBooks.length})</h2>
      <ul className="space-y-3">
        {filteredBooks.map((book) => (
          <li key={book.id} className="flex gap-3 items-center">
            <img
              src={book.cover}
              alt={book.title}
              className="w-16 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-500">
                {book.author} | {book.year}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
function ReadBooks() {
  const [read, setRead] = useState(tempRead);
  const average = (arr) => arr.reduce((acc, cur) => acc + cur / arr.length, 0);

  const avgUser = average(read.map((b) => b.rating));
  const avgBook = average(read.map((b) => b.avgRating));
  return (
    <>
      <h2 className="font-semibold mb-2">Read Books ({read.length})</h2>
      <p className="mb-2">
        🌟 Avg User Rating: {avgUser.toFixed(1)} | ⭐ Avg Book Rating:{" "}
        {avgBook.toFixed(1)}
      </p>
      <ul className="space-y-3">
        {read.map((book) => (
          <li key={book.id} className="flex gap-3 items-center">
            <img
              src={book.cover}
              alt={book.title}
              className="w-16 h-24 object-cover rounded"
            />
            <div>
              <h3 className="font-semibold">{book.title}</h3>
              <p className="text-gray-500">
                {book.author} | {book.year}
              </p>
              <p className="text-gray-600">
                🌟 {book.rating} | ⭐ {book.avgRating}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
