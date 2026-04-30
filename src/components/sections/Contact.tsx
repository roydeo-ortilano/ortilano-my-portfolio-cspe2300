"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  function validate() {
    const newErrors = { name: "", email: "", message: "" };
    let valid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
      valid = false;
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
      valid = false;
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit() {
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Contact Me
        </h2>

        {submitted ? (
          <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 p-4 rounded-md text-center font-medium">
            Message sent successfully! I will get back to you soon.
          </div>
        ) : (
          <div className="flex flex-col gap-4">

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-medium mb-1">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message"
                rows={5}
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>

          </div>
        )}

        <div className="mt-10 text-center text-gray-500 dark:text-gray-400">
          <p>Or reach me directly at: <span className="text-blue-600 dark:text-blue-400">contact@myportfolio.com</span></p>
        </div>
      </div>
    </section>
  );
}
