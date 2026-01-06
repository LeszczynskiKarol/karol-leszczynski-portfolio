// src/components/sections/ContactForm.tsx

"use client";
import { useState } from "react";

const API_ENDPOINT =
  "https://4xz7pkbd51.execute-api.eu-north-1.amazonaws.com/prod/send";
const DOMAIN = "karol-leszczynski.pl";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          domain: DOMAIN,
        }),
      });

      if (!response.ok) throw new Error("Błąd wysyłania");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Imię"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
        className="w-full p-3 mb-4 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
        className="w-full p-3 mb-4 border rounded"
      />
      <textarea
        placeholder="Wiadomość"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        required
        rows={5}
        className="w-full p-3 mb-4 border rounded"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {status === "sending" ? "Wysyłanie..." : "Wyślij"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600">Wiadomość wysłana!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Błąd wysyłania</p>
      )}
    </form>
  );
}
