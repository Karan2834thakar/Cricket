import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token); // Store token
      alert("Login successful");
      navigate("/"); // Redirect to home page after login
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-blue-400 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-white mb-4">Login</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
            className="w-full p-2 border rounded mb-2" required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange}
            className="w-full p-2 border rounded mb-4" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
}
