import { useState } from "react";

function BookDeletion() {
  const [books, setBooks] = useState([
    { id: 1, title: "Java Programming" },
    { id: 2, title: "Python Fundamentals" },
    { id: 3, title: "React Development" }
  ]);
  const [loading, setLoading] = useState(false);

  const deleteBook = async (id) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setBooks((currentBooks) => currentBooks.filter((book) => book.id !== id));
    setLoading(false);
  };

  return (
    <section className="card card-center">
      <div className="card-header">
        <p className="eyebrow">Book Deletion System</p>
        <h2>Remove outdated titles</h2>
      </div>
      <p className="card-copy">
        Select a book and delete it from the inventory. The list updates instantly.
      </p>

      {loading && <div className="status-banner">Deleting book…</div>}

      <div className="book-list">
        {books.map((book) => (
          <article key={book.id} className="book-item">
            <div>
              <h3>{book.title}</h3>
            </div>
            <button
              className="button button-secondary"
              onClick={() => deleteBook(book.id)}
              disabled={loading}
            >
              Delete
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BookDeletion;
