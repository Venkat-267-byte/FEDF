import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  return (
    <section className="card card-center">
      <div className="card-header">
        <p className="eyebrow">Sign In</p>
        <h2>Welcome back</h2>
        <p className="card-copy">
          Use your librarian credentials to access the dashboard.
        </p>
      </div>

      <form className="form-grid" onSubmit={submitForm}>
        <label>
          Email address
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
          />
        </label>

        <button className="button button-primary" type="submit">
          Login
        </button>
      </form>
    </section>
  );
}

export default Login;
