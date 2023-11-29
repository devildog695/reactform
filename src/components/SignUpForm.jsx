import React, { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Form validation
    if (username.length !== 8) {
      setError("Username must be eight characters in length");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      const rsp = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const info = await rsp.json();
      console.log(info);
      setToken(info.token);

      setUsername("");
      setPassword("");
      setError(null); // Clear any previous error
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <h2>Sign Up Form</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Username:{" "}
          <input
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            id="user-name"
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="user-password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
