import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SigninAndSignup() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegistering && password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success(`Account created for ${firstName} ${lastName}`);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful!");
        navigate("/home");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="app-container">
      <div className="left-panel">
        <h1>Welcome Back 👋</h1>
        <p>
          {isRegistering
            ? "Already have an account?"
            : "New here? Create an account!"}
        </p>
        <button
          onClick={() => {
            setIsRegistering(!isRegistering);
          }}
        >
          {isRegistering ? "Login" : "Register User"}
        </button>
      </div>

      <div className="right-panel">
        <h2>{isRegistering ? "Create New User Account" : "Sign In"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          {isRegistering && (
            <>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {isRegistering && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
      </div>
    </div>
  );
}

export default SigninAndSignup;
