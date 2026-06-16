import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <section className="dashboard-grid">
      <div className="card">
        <div className="card-header">
          <p className="eyebrow">Dashboard</p>
          <h2>Librarian Overview</h2>
        </div>
        <p className="card-copy">
          Monitor your collection, manage books, and delete entries in a single place.
        </p>
      </div>

      <div className="card stats-card">
        <div className="stat-row">
          <div>
            <p className="stat-value">3</p>
            <p className="stat-label">Books in inventory</p>
          </div>
        </div>
        <Link className="button button-primary" to="/deletebook">
          Review books
        </Link>
      </div>
    </section>
  );
}

export default Dashboard;
